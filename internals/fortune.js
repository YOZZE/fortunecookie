 var fortunes = [
     "En todo el tiempo ama el amigo",
     "Hoy es tu dia de suerte",
     "Hijo de Irving que nace torcido",
     "El matromonio espara aquellos que temen dormir solos",
     "Algunas veces el perder una batalla",
     ];
     
     function getIntRandomNumber(min, max) {
         return Math.floor(Math.random( )   * (max - min)+ min);
        
     }


module.exports = {
  "getFortune"  : function (cb){
      //Construyo objeto respuesta
      var selector = getIntRandomNumber(0, fortunes.length - 1);
      var fortuneMessage = fortunes[selector];
      var fortunePaperObjet = {
          "paper" : fortuneMessage
      };
      
      cb(JSON.stringify(fortunePaperObj);
      
  }
};