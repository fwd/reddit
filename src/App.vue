<template>
  <div id="app">
    <form v-on:submit.prevent="onSubmit" class="search-box">
      <!-- <input class='search-input' type="text" v-model='appState.query' placeholder='Enter query' autofocus> -->
      <typeahead
        placeholder="Enter subreddit name"
        ref:typeahead
        @selected="doSearch"
        :query="appState.query"
        :get-suggestions="getSuggestions"
      ></typeahead>
    </form>
    <div class="help" v-if="false && !isLoading">
      The graph of related subreddits
      <a
        href="#"
        @click.prevent="aboutVisible = true"
        class="highlight"
      >Learn more.</a>
    </div>
    <div class="help" v-if="isLoading">{{appState.progress.message}}</div>

    <about v-if="aboutVisible" @close="aboutVisible = false"></about>

    <div class="tooltip" ref="tooltip">{{tooltip.text}}</div>
    <subreddit v-if="subreddit" :name="subreddit" class="preview"></subreddit>
    <div class="close-container" v-if="subreddit">
      <a href="#" @click.prevent="subreddit = null">close</a>
    </div>
  </div>
</template>

<script>
import "vuereddit/dist/vuereddit.css";

import appState, { performSearch } from "./appState.js";
import Subreddit from "vuereddit";
import createRenderer from "./lib/createRenderer";
import About from "./components/About";
import Typeahead from "./components/Typeahead";
import bus from "./bus";
import redditDataClient from "./lib/redditDataClient";

export default {
  name: "App",
  data() {
    return {
      aboutVisible: false,
      subreddit: null,
      appState,
      tooltip: {
        text: "",
        x: "",
        y: ""
      }
    };
  },
  components: {
    About,
    Typeahead,
    Subreddit
  },
  computed: {
    isLoading() {
      return appState.progress.working;
    }
  },
  methods: {
    doSearch(q) {
      appState.query = q;
      this.onSubmit();
    },
    getSuggestions(input) {
      return redditDataClient.getSuggestion(input);
    },
    onSubmit() {
      if (!appState.query) return;
      performSearch(appState.query);
      console.log( appState )
      this.renderer.render(appState.graph);
      const el = document.querySelector(":focus");
      if (el) el.blur();
    },
    showSubreddit(name) {
      this.subreddit = name;
    }
  },
  mounted() {
    this.renderer = createRenderer(appState.progress);
    bus.on("show-subreddit", this.showSubreddit);
    bus.on("new-search", this.doSearch);
    this.doSearch( window.location.search && window.location.search.replace('?query=', '') ? window.location.search.replace('?query=', '') : 'news' )
    if (appState.graph) {
      this.renderer.render(appState.graph);
    }
  },

  beforeDestroy() {
    bus.off("show-subreddit", this.showSubreddit);
    bus.off("new-search", this.doSearch);
  }
};
</script>

<style lang='stylus'>
@import ('./vars.styl');

#app {
  position: relative;
  margin: 8px 14px;
  width: 392px;
  background: background-color;
}

.close-container {
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  height: 40px;

  a {
    padding: 0 12px;
    font-size: 12px;
    color: #fff;
    background-color: #333;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.highlight {
  color: blue;
}

rect, path, text {
  transition: stroke 200ms, fill 200ms;
}

.hovered rect, path.hovered {
  stroke: blue;
}

.hovered rect {
  stroke: black;
}

.help {
  font-size: 12px;
  margin-top: 8px;

  a {
    background: background-color;
  }
}

.special {
  color: highlight-color;
  font-family: monospace;
}

a {
  text-decoration: none;
}

.age-warning {
  margin-top: 62px
}

.about-line {
  position: fixed;
  right: 0;
  top: 8px;
  padding: 0px 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  a {
    text-align: right;
    background: background-color;
    font-size: 12px;
    padding: 0 8px;
    line-height: 24px;
    height: 24px;
    color: secondary-color;
    border-bottom: 1px solid transparent;

    &:hover, &:focus {
      color: highlight-color;
      border-bottom: 1px dashed;
    }
  }
}

.tooltip {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 -1px 0px rgba(0, 0, 0, 0.02);
  position: fixed;
  background: background-color;
  padding: 8px;
  border: 1px solid border-color;
  pointer-events: none;
  opacity: 0;
  transition-duration: 300ms;
  transition-property: opacity;
}

.tooltip.visible {
  opacity: 1;
}

.search-box {
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 -1px 0px rgba(0, 0, 0, 0.02);
  height: 48px;
  display: flex;
  font-size: 16px;
  padding: 0;
  cursor: text;

  span {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
}

.subreddit.preview {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  overflow: hidden;

  a {
    target: '_blank';
  }

  .controls {
    position: absolute;
    top: 42px;
    right: 0;
    left: 1px;
    height: 32px;
  }
}

.post .url {
  color: #bebebe;
}

input {
  border-bottom: 2px solid #ffffff1a;
      border: 2px solid #ffffff40;
    border-radius: 0px;
}

.help {
  margin-top: 0 !important;
  padding-top: 10px !important;
}

.welcome,
.suggestion,
.small-screen .post .vote-count.small,
.post .post-content .status-line,
.post .title,
.post .post-content,
.subreddit.preview,
.help,
input,
svg,
.title-area,
.close-container a {
  color: #FFF !important;
  background-color: #000 !important;
}


.title-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
}

@media (max-width: 800px) {
  #app {
    width: 100%;
    margin: 0;
  }

  .welcome {
    padding: 16px;
  }

  .help {
    padding: 0 8px;
  }

  .about-line {
    bottom: 0;
    top: initial;
    right: 0;
  }

  .subreddit.preview {
    width: 100%;
  }
}

g.node {
  cursor: pointer;
}

.details-container {
  position: absolute;
  top: 82px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.read-more {
  background-image: linear-gradient(180deg,hsla(0,0%,100%,0), #000) !important;
}

.post .post-content .status-line,
.post .post-content .byline {
    font-size: 14px;
}

@media (max-height: 550px) {
  .search-box {
    height: 32px;

    input.search-input {
      font-size: 16px;
    }
  }

  .help {
    margin-top: 4px;
  }
}
</style>
