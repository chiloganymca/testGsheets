const {google} = require('googleapis');
const keys = require('./keys.json');

const client = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err,tokens){

  if(err){
    console.log(err);
    return;
  } else { 
    console.log('you are connected yes sir');
    gsrun(client);
  }
  async function gsrun(cl){
    const gsapi = google.sheets({version:'v4',auth: cl});
    let arrayz = ['YMCA of Metro Chicago','YMCA of San Francisco',]
    let cityVariable = `${arrayz[1]}`;
    let rangeCustom = '!A3:K22';
    const options = {
      spreadsheetId: '1Kpr4tx2NlYO2d0gw_ZsKL5mriuFLj-eve3Ib60LSiW8',
      // range: 'YMCA of Metro Chicago!A3:K22'
      range: cityVariable + rangeCustom
    };

    let ybiaGoogleSheet = await gsapi.spreadsheets.values.get(options);
    // let ybiaGoogleSheet = await gsapi.spreadsheets.get(options);
  
    console.log(ybiaGoogleSheet.data.values);
    // console.log(ybiaGoogleSheet.data.values);
    // const locData = ybiaGoogleSheet.data.values;
    // console.log(locData.map((value)=>{return value[0] + ' : ' + value[1] }));
      // })
      
    // console.log(ybiaGoogleSheet.data.properties);
    // console.log(ybiaGoogleSheet.data.properties.title);
    

    // console.log(ymcags.data.sheets[0].values);
    // console.log(ymcags.getSheets());
    // console.log("'YMCA of Metro Chicago'!A4:K22");
    // console.log(ybiaGoogleSheet.data.values.map((value)=>{return value[0]
    // }));
    
   
  } 

  // export const locData;
});

