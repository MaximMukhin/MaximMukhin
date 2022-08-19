const article = [
   "SOFIA\tS\tK\t21\t106\t1\tD\tSF027\tL",
   "SOFIA\tS\tK\t21\t106\t1\tD\tSF027\tR",
   "SOFIA\tS\tK\t22\t67\t1\tM\tSF027\t",
   "SOFIA\tS\tK\t23\t53\t2\tB\tSF027\t",
   "SOFIA\tS\tS\t20\t60\t2\tB\tSF027\t",
   "SOFIA\tS\tS\t20\t70\t2\tB\tSF027\t",
   "SOFIA\tS\tS\t20\t80\t2\tB\tSF027\t",
   "SOFIA\tS\tS\t20\t90\t2\tB\tSF027\t",
   "SOFIA\tS\tS\t20\t100\t2\tB\tSF027\t",
   "SOFIA\tS\tT\t20\t60\t2\tB\tSF027\t",
   "SOFIA\tS\tT\t20\t70\t2\tB\tSF027\t",
   "SOFIA\tS\tT\t20\t80\t2\tB\tSF027\t",
]

const newArticle = article.map((art, index) => {

 let replaced =  art.replace(/\t+/g, '-') //=
      .replace(/\s+/g, '-')  //=
      .replace(/-S-S-/gi, '-S-S') //=
      .replace(/-S-T-/gi, '-S-T') //=
      .replace(/-S-K-/gi, '-S-K') //=
      .replace(/-P-S-/gi, '-P-S') //=
      .replace(/-P-T-/gi, '-P-T') //=
      .replace(/-P-K-/gi, '-P-K') //=
      .replace(/-L-T-/gi, '-L-T') //=
      .replace(/-L-P-/gi, '-L-P') //=
      .replace(/-L-F-/gi, '-L-F') //=
      .replace(/1-D/gi, '1D') //=
      .replace(/2-D/gi, '2D') //=
      .replace(/1-B/gi, '1B') //=
      .replace(/2-B/gi, '2B') //=
      .replace(/1-M/gi, '1M') //=

   console.log('newArt', replaced) //=

   if (replaced[replaced.length - 1] === '-') {
      return replaced.slice(0, -1) //=
   } else {
      return replaced //=
   }
})
console.log('newArticle', newArticle)





/* const newArticle = article.map((art, index) => {

   let newArt = art

   newArt.replace(/\t+/g, '-') //=
      .replace(/\s+/g, '-')  //=
      .replace(/-S-S-/gi, '-S-S') //=
      .replace(/-S-T-/gi, '-S-T') //=
      .replace(/-S-K-/gi, '-S-K') //=
      .replace(/-P-S-/gi, '-P-S') //=
      .replace(/-P-T-/gi, '-P-T') //=
      .replace(/-P-K-/gi, '-P-K') //=
      .replace(/-L-T-/gi, '-L-T') //=
      .replace(/-L-P-/gi, '-L-P') //=
      .replace(/-L-F-/gi, '-L-F') //=
      .replace(/1-D/gi, '1D') //=
      .replace(/2-D/gi, '2D') //=
      .replace(/1-B/gi, '1B') //=
      .replace(/2-B/gi, '2B') //=
      .replace(/1-M/gi, '1M') //=

   console.log('newArt', newArt) //=

   if (newArt.length - 1 === '-') {
      return newArt.slice(0, -1) //=
   } else {
      return newArt //=
   }
}) */