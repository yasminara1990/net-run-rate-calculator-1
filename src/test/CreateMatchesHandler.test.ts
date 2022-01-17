import createMatchesHandler = require('../handlers/createMatchesHandler');

describe('matchesHandler', function(){
    it('genscore', function(){
        let result = createMatchesHandler.generateRandom(50,50);
        expect(result).toBe(50);
    });
  });

  describe('genwicket', function(){
    it('gwicket', function(){
        let result = createMatchesHandler.generateWickets();
        expect(result).toBe(0);
    });
  });  

  describe('genovers', function(){
    it('govers', function(){
        if(createMatchesHandler.generateOvers(createMatchesHandler.MatchType.ODI)){
            let result = createMatchesHandler.generateRandom(30,30);
            expect(result).toBe(30);
        }else if(createMatchesHandler.generateOvers(createMatchesHandler.MatchType.T20)){
            let result = createMatchesHandler.generateRandom(10,10);
            expect(result).toBe(10);
        }
    });
  });