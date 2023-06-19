var ENTITY_MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;',
  "\n": "<br />",
  "  ": "&emsp;",
};

var DICT = {
  'e':'ᐁ',   'i': 'ᐃ',   'ii': 'ᐄ',   'u': 'ᐅ',   'uu': 'ᐆ',   'a': 'ᐊ',   'aa': 'ᐋ',  'h': 'ᐦ',
 'pe':'ᐯ',  'pi': 'ᐱ',  'pii': 'ᐲ',  'pu': 'ᐳ',  'puu': 'ᐴ',  'pa': 'ᐸ',  'paa': 'ᐹ',  'p': 'ᑉ',
 'te':'ᑌ',  'ti': 'ᑎ',  'tii': 'ᑏ',  'tu': 'ᑐ',  'tuu': 'ᑑ',  'ta': 'ᑕ',  'taa': 'ᑖ',  't': 'ᑦ',
 'ke':'ᑫ',  'ki': 'ᑭ',  'kii': 'ᑮ',  'ku': 'ᑯ',  'kuu': 'ᑰ',  'ka': 'ᑲ',  'kaa': 'ᑳ',  'k': 'ᒃ',
 'ge':'ᒉ',  'gi': 'ᒋ',  'gii': 'ᒌ',  'gu': 'ᒍ',  'guu': 'ᒎ',  'ga': 'ᒐ',  'gaa': 'ᒑ',  'g': 'ᒡ',
 'me':'ᒣ',  'mi': 'ᒥ',  'mii': 'ᒦ',  'mu': 'ᒧ',  'muu': 'ᒨ',  'ma': 'ᒪ',  'maa': 'ᒫ',  'm': 'ᒻ',
 'ne':'ᓀ',  'ni': 'ᓂ',  'nii': 'ᓃ',  'nu': 'ᓄ',  'nuu': 'ᓅ',  'na': 'ᓇ',  'naa': 'ᓈ',  'n': 'ᓐ',
 'se':'ᓭ',  'si': 'ᓯ',  'sii': 'ᓰ',  'su': 'ᓱ',  'suu': 'ᓲ',  'sa': 'ᓴ',  'saa': 'ᓵ',  's': 'ᔅ',
 'le':'ᓓ',  'li': 'ᓕ',  'lii': 'ᓖ',  'lu': 'ᓗ',  'luu': 'ᓘ',  'la': 'ᓚ',  'laa': 'ᓛ',  'l': 'ᓪ',
 'je':'ᔦ',  'ji': 'ᔨ',  'jii': 'ᔩ',  'ju': 'ᔪ',  'juu': 'ᔫ',  'ja': 'ᔭ',  'jaa': 'ᔮ',  'j': 'ᔾ',
 'ye':'ᔦ',  'yi': 'ᔨ',  'yii': 'ᔩ',  'yu': 'ᔪ',  'yuu': 'ᔫ',  'ya': 'ᔭ',  'yaa': 'ᔮ',  'y': 'ᔾ',
 've':'ᕓ',  'vi': 'ᕕ',  'vii': 'ᕖ',  'vu': 'ᕗ',  'vuu': 'ᕘ',  'va': 'ᕙ',  'vaa': 'ᕚ',  'v': 'ᕝ',
 'we':'ᕓ',  'wi': 'ᕕ',  'wii': 'ᕖ',  'wu': 'ᕗ',  'wuu': 'ᕘ',  'wa': 'ᕙ',  'waa': 'ᕚ',  'w': 'ᕝ',
 're':'ᕃ',  'ri': 'ᕆ',  'rii': 'ᕇ',  'ru': 'ᕈ',  'ruu': 'ᕉ',  'ra': 'ᕋ',  'raa': 'ᕌ',  'r': 'ᕐ',
 'qe':'ᙯ',  'qi': 'ᕿ',  'qii': 'ᖀ',  'qu': 'ᖁ',  'quu': 'ᖂ',  'qa': 'ᖃ',  'qaa': 'ᖄ',  'q': 'ᖅ',
'nge':'ᙰ', 'ngi': 'ᖏ', 'ngii': 'ᖐ', 'ngu': 'ᖑ', 'nguu': 'ᖒ', 'nga': 'ᖓ', 'ngaa': 'ᖔ', 'ng': 'ᖕ',
          'nngi': 'ᙱ','nngii': 'ᙲ','nngu': 'ᙳ','nnguu': 'ᙴ','nnga': 'ᙵ','nngaa': 'ᙶ','nng': 'ᖖ',
 'Le':'ᐦᓓ', 'Li': 'ᖠ',  'Lii': 'ᖡ',  'Lu': 'ᖢ',  'Luu': 'ᖣ',  'La': 'ᖤ',  'Laa': 'ᖥ',  'L': 'ᖦ',
'lle':'ᐦᓓ','lli': 'ᖠ', 'llii': 'ᖡ', 'llu': 'ᖢ', 'lluu': 'ᖣ', 'lla': 'ᖤ', 'llaa': 'ᖥ', 'll': 'ᖦ',
 'Re':'ᖆ',  'Ri': 'ᖇ',  'Rii': 'ᖇ፞',  'Ru': 'ᖈ',  'Ruu': 'ᣩ',  'Ra': 'ᖉ',  'Raa': 'ᖉ፞',  'R': 'ᴿ',
};

function escapeHtml(string) {
  return String(string).replace(/  |[&<>"'\/\n]/g, function (s) {
    return ENTITY_MAP[s];
  });
}

function shouldReplace(str, i, len) {
    chunk = str.substring(i, i + len);

    if (!(chunk in DICT))
        return false;

    if (len === 1 || chunk.search(/[aeiouAEIOU]$/) != -1)
        return true;

    /*
    for (var nextLen = 4; nextLen >= 2; nextLen--) {
        if (str.substring(i + len - 1, i + len - 1 + nextLen) in DICT)
            return false;
    }
    */
    if (chunk.search(/[a-z]$/) !== -1 &&
            str.substring(i + len, i + len + 1).search(/[aeiou]$/) !== -1)
        return false;

    if (chunk.search(/[A-Z]$/) !== -1 &&
            str.charAt(i + len).search(/[AEIOU]$/) !== -1)
        return false;

    return true;
}

function replaceDict(str) {
    result = "";
    for (var i = 0; i < str.length;) {
        for (var len = 4; len >= 1; len--) {
            if (shouldReplace(str, i, len)) {
                result += DICT[str.substring(i, i + len)];
                i += len;
                break;
            } else if (len == 1) {
                result += str.charAt(i);
                i += 1;
            }
        }
    }
    result = escapeHtml(result);
    return result.replace(/-/g, "");
};

$(document).ready(function() {
    $('.composer').keyup(function(evt) {
        var replaced = replaceDict($(this).val());
        var target_unicode = $(this).attr('id') + '_unicode';

        $('#' + target_unicode).html(function(i, text) {
            return replaced;
        });
    });
})
