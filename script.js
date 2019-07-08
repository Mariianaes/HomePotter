let cores = ["white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B"
,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B"
,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B"
,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B"
,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B"
,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B" ,"white", "#EEAD0E", "#8B008B"];

var layout = d3.layout.cloud()
    .size([1500, 1000])
    .words([
      "Avada Kedavra", "Lumos", "Expecto Patronum", "Accio", "Diffindo", "Aguamenti", "Wingardium Leviosa",
      "Impervius", "Legilimens","Estupefaço","Expelliarmus","Petrificus Totallus","Abaffiato","Alarte Ascendere","Alohomora",
      "Animus Corpus","Aqua Eructo","Avifors","Azaração Ferreteante","Bombarda","Braquium Remendo","Cara-de-lesma",
      "Braquium Remendo","Carpe Retractum","Cave Inimicum","Cistem Aperio","Colloportus","Confringo","Confundus",
      "Conjunctivitus","Conjurius Army","Cruciatus","Deffodio","Deletrius","Dessendio","Densaugeo","Deprimo",
      "Depulso","Diffindo","Diminuendo","Dissendium","Draconifors","Duro","Ebublio","Element circa","Engorgio",
      "Ennervate","Episkey","Erecto","Estupefaça","Estupore","Evanesco","Everte Statum","Expulso","Ferula",
      "Fianto Duri","Fidelius","Flagrate","Flipendo","Fogomaldito","Geminio","Glacius", "Salvio Hexia", "Locomotor", "Immobillus", "Pericullum",
      "Herbivicus", "Aresto Momentum", "Obliviate", "Sectumsempra", "Finiti Incantatem", "Levicorpus", "Larcarnum Inflamare", "Mosmordre", "Vulnera Sanentur",
      "Vipera Evanesca", "Fulgari", "Reducto", "Imperius", "Tarrantallegra","Incendio", "Riddikulus", "Rictusempra", "Nox", "Lumos Solem", "Oppugno", "Impedimenta",
      "Langlock", "Mortis", "Homonculos", "Reparo" ].map(function(d, i) {
      return {
        text: d,
        size: 10 + Math.random() * 60,
        color: cores[i]
      };
    }))
    .padding(5)
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("Mountains of Christmas", "cursive")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);

layout.start();

function draw(words) {
  d3.select("body").append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "Mountains of Christmas")
      .attr("text-anchor", "middle")
      .attr("fill", d => d.color)
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
}
