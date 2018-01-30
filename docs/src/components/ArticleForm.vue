<template lang="html">
<div class = "modal">
  <div class="form" @keyup.esc="cancelEvent">
    <h3 class="heading">{{headingText}}</h3>

    <div class="form-group">
      <div class="input-icon"><img class="icon" src="../../static/css/svg/si-glyph-person-2.svg"/></div>
      <input type="text" class="form-control" name="id" placeholder="ID"value="">
      <span id="checked_id" aria-hidden="true"></span>
    </div>
    <div class="form-group">
      <span class="input-icon"><img class="icon" src="../../static/css/svg/si-glyph-lock.svg"/></span>
      <input type="password" class="form-control" name="password" placeholder="PASSWORD"value="">
    </div>
    <div class="form-group">
      <div>&nbsp;</div>
      <input type="text" class="btn btn-primary" value="확인" @click="submitEvent()">
      <input type="text" class="btn btn-primary" value="취소" @click="cancelEvent()">
    </div>
  </div>

</div><!-- the end of LoginModal -->

</template>

<script>
export default {
  name: "articleForm",
  data: function(){
    return {headingText:"로그인"};
  },
  methods: {
    cancelEvent: function(){
      this.$router.push({name:'HelloWorld'});
    }
  }
}
</script>

<style lang="css" scoped>
.modal {display: block; position: fixed; z-index: 1;
left: 0; top: 0; width: 100%; height: 100%;
overflow: auto; background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);}
.form {background-color: white; margin: 100px auto;
  max-width: 400px; min-width: 200px; font-size: 13px "verdana"; padding: 10px 10px 10px 10px;}
.form div {padding: 0; display: block; margin: 10px 0 0 0;}
.form label {text-align: left; margin: 0 0 3px 0; padding: 0px; display: block; font-weight: bold;}
.form input, textarea, select { box-sizing: border-box; border: 1px solid #BEBEBE; padding: 7px; margin:0px;
  outline: none;}
.form .long{width: 100%;}
.form .button{background: #2B798D; padding: 8px 15px 8px 15px; border: none; color: #fff;}
.form .button:hover { background: #4691A4;}
.form .heading{background: #33A17F; font-weight: 300; text-align: left; padding: 20px; color: #fff;
margin: 5px 0 30px 0; padding: 10px; min-width: 200px; max-width: 400px;}
</style>
