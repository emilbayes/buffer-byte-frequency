var template = Array(256)
for (var i = 0; i < template.length; i++) {
  template[i] = 0
}

module.exports = function (buf) {
  var freq = template.slice()

  for (var i = 0; i < buf.length; i++) {
    freq[buf[i]]++
  }

  return freq
}
