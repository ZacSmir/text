var title = "phishing"

getWikiIntro(title, function(text) {
  console.log(text.length);
  var sentences = text.split(".");
  console.log(sentences);
  var slicedstuff = sentences.slice(0, 2);
  var withperiodssentences = slicedstuff.join(".")
  console.log(sentences.length);
  var reg = RegExp(title, "gi")
  var turtlezach = withperiodssentences.replace(reg, "Zach")

  return turtlezach

})
