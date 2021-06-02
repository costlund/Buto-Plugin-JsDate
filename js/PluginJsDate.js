function PluginJsDate(){
  this.data = {};
  this.data.date = new Date()
  this.data.d = null;
  this.data.dd = null;
  this.data.m = null;
  this.data.mm = null;
  this.data.y = null;
  this.data.yy = null;
  this.data.separator = '-';
  this.set_date = function(){
    this.data.d = this.data.date.getDate();
    if(this.data.d<10){
      this.data.dd = `0${this.data.d}`;
    }else{
      this.data.dd = `${this.data.d}`;
    }
    this.data.m = this.data.date.getMonth()+1; 
    if(this.data.m<10){
      this.data.mm = `0${this.data.m}`;
    }else{
      this.data.mm = `${this.data.m}`;
    }
    this.data.yy = this.data.date.getFullYear();
    this.data.y = this.data.date.getFullYear().toString().substr(2);
  }
  this.add_date = function(days){
    this.data.date = new Date(this.data.date.getTime() + days*24*60*60*1000);
    this.set_date();
  }
  this.set_date();
  this.get_date_yy_mm_dd = function(){
    return this.data.yy+this.data.separator+this.data.mm+this.data.separator+this.data.dd;
  }
  this.get_date_y_mm_dd = function(){
    return this.data.y+this.data.separator+this.data.mm+this.data.separator+this.data.dd;
  }
}
var PluginJsDate = new PluginJsDate();
