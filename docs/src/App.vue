<template>
  <div class="container-fluid">
    <div class="row header">
        <div class="col-3 main-logo">
          <span style="">Really</span>
        </div>
        <div class="col-6">
          <!--
          <div id="input-container">
            <input class="search-bar" type="text" name="" placeholder="검색" value="">
            <img class="icon" src="../static/css/svg/si-glyph-text-search.svg"/>
          </div>
        -->
        </div>
        <div class="col-3">
          <img class="icon" src="../static/css/svg/si-glyph-antenna-1.svg"/>
        </div>
    </div>
  <section>
    <router-view></router-view>
    <!--
    <div class="row content">
      <div class="col-12">
        <div class="row">
          <div class="col-3">
            <img class="title-image" src="../static/css/img/selfie1.jpg" alt="">
          </div>
          <div class="col-9">
            ------ Posted about -----
          </div>
        </div>
        <div class="row main-content">
          <div class="col-12">
            <img src="../static/css/img/audience.jpg" alt="">
            <div class="col-12 content-description">
              <div class="">
                <span>아브라카다브라</span>
              </div>
              <div class="">
                <span>Lorem ipsum dolor</span>
              </div>
              <div class="">
                <span>Lorem ipsum dolor sit amet, consect</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 content-icon">
            <img class="icon" src="../static/css/svg/si-glyph-heart-plus.svg"/>
            <img class="icon" src="../static/css/svg/si-glyph-arrow-change.svg"/>
            <img class="icon" src="../static/css/svg/si-glyph-triangle-right.svg"/>
            <img class="icon" src="../static/css/svg/si-glyph-trolley-2.svg"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row content">
      <div class="col-12">
        <div class="row">
          <div class="col-3">
            <img class="title-image" src="../static/css/img/selfie2.jpg" alt="">
          </div>
          <div class="col-9">
            ------ Posted about -----
          </div>
        </div>
        <div class="row main-content">
          <div class="col-12">
            <img src="../static/css/img/girl.jpg" alt="">
            <div class="col-12 content-description">
              <div class="">
                <span>아브라카다브라</span>
              </div>
              <div class="">
                <span>Lorem ipsum dolor</span>
              </div>
              <div class="">
                <span>Lorem ipsum dolor sit amet, consect</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 content-icon">
            <img class="icon" src="../static/css/svg/si-glyph-heart-plus.svg"/>
            <img class="icon" src="../static/css/svg/si-glyph-arrow-change.svg"/>
            <img class="icon" src="../static/css/svg/si-glyph-triangle-right.svg"/>
            <img class="icon" src="../static/css/svg/si-glyph-trolley-2.svg"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row content">
      <div class="col-12">
        <div class="row">
          <div class="col-3">
            <img class="title-image" src="../static/css/img/selfie3.jpg" alt="">
          </div>
          <div class="col-9">
            ------ Posted about -----
          </div>
        </div>
        <div class="row main-content">
          <div class="col-12">
            <img src="../static/css/img/harp.jpg" alt="">
            <div class="col-12 content-description">
              <div class="">
                <span>아브라카다브라</span>
              </div>
              <div class="">
                <span>Lorem ipsum dolor</span>
              </div>
              <div class="">
                <span>Lorem ipsum dolor sit amet, consect</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 content-icon">
            <img class="icon" src="../static/css/svg/si-glyph-heart-plus.svg"/>
            <img class="icon" src="../static/css/svg/si-glyph-arrow-change.svg"/>
            <img class="icon" src="../static/css/svg/si-glyph-triangle-right.svg"/>
            <img class="icon" src="../static/css/svg/si-glyph-trolley-2.svg"/>
          </div>
        </div>
      </div>
    </div>
  -->
  </section>
  <div class="row footer">
    <div class="col-3">
      <router-link to="/">
        <img class="icon" src="../static/css/svg/si-glyph-air-balloon.svg"/>
      </router-link>
    </div>
    <div class="col-3">
      <router-link to="/add_article">
        <img class="icon" src="../static/css/svg/si-glyph-button-plus.svg"/>
      </router-link>
    </div>
    <div class="col-3">
      <router-link to="/user">
        <img class="icon" src="../static/css/svg/si-glyph-bullet-list-2.svg"/>
      </router-link>
    </div>
    <div class="col-3">
      <a href="#" onClick='javascript:showModalLogin();'><img class="icon" src="../static/css/svg/si-glyph-biscuit.svg"/></a>
    </div>
  </div>
</div> <!-- the end of container-fluid -->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");

</style>
