<?php
class PluginJsDate{
  public function widget_include($data){
    wfDocument::renderElementFromFolder(__DIR__, __FUNCTION__);
  }
}
