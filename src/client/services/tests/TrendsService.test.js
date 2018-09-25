import TrendsService from "../TrendsService"

test('TrendsService  request test', (done) => {

    TrendsService.getTrends("влог",(data)=>{
        expect(data).toBeDefined();
        done();
    });

});