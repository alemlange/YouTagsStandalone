import AutoService from "../AutoService"

test('AutoService youtube request test', (done) => {

    AutoService.searchYoutubeAuto("влог",(data)=>{
        expect(data).toBeDefined();
        done();
    });
});

test('AutoService yandex request test', (done) => {

    AutoService.searchYandexAuto("влог",(data)=>{
        expect(data).toBeDefined();
        done();
    });
});

test('AutoService google request test', (done) => {

    AutoService.searchGoogleAuto("влог",(data)=>{
        expect(data).toBeDefined();
        done();
    });
});