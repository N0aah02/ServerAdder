function copyServerUrl(){
  if(result_from.result.value){
    result_from.result.select();
    document.execCommand("Copy");
  }
}
