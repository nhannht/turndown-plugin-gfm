// [[file:../README.org::*Import all][Import all:1]]
var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')
var turndownService = new TurndownService()
var org = turndownPluginGfm.org
turndownService.use(org)

var complex1 = '<p class="topic-paragraph"><strong><span id="ref227172"></span>Vietnam War</strong>,  (1954–75), a protracted conflict that pitted the <span id="ref227179"></span><a href="https://www.britannica.com/topic/communist-party-politics" class="md-crosslink">communist</a> government of North Vietnam and its allies in South Vietnam, known as the <span id="ref291137"></span><a href="https://www.britannica.com/topic/Viet-Cong" class="md-crosslink">Viet Cong</a>, against the government of South Vietnam and its principal ally, the <span id="ref227181"></span><a href="https://www.britannica.com/place/United-States" class="md-crosslink">United States</a>. Called the “American War” in Vietnam (or, in full, the “War Against the Americans to Save the Nation”), the war was also part of a larger regional conflict (<em>see</em> <a href="https://www.britannica.com/event/Indochina-wars" class="md-crosslink">Indochina wars</a>) and a <a href="https://www.merriam-webster.com/dictionary/manifestation" class="md-dictionary-link md-dictionary-tt-off" data-term="manifestation">manifestation</a> of the <a href="https://www.britannica.com/event/Cold-War" class="md-crosslink">Cold War</a> between the United States and the <a href="https://www.britannica.com/place/Soviet-Union" class="md-crosslink">Soviet Union</a> and their respective allies.</p>'

console.log(turndownService.turndown(complex1))
// Import all:1 ends here
