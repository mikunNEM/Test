const symbol = require('/node_modules/symbol-sdk');

const GENERATION_HASH = '57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6';
const EPOCH = 1615853185;
//const MOSAIC_ID = '310378C18A140D1B';
const NODE_URL = 'https://symbol-mikun.net:3001';
const NET_TYPE = symbol.NetworkType.MAIN_NET;

const repositoryFactory = new symbol.RepositoryFactoryHttp(NODE_URL);       // RepositoryFactoryはSymbol-SDKで提供されるアカウントやモザイク等の機能を提供するRepositoryを作成するためのもの
const accountHttp = repositoryFactory.createAccountRepository();
const transactionHttp = repositoryFactory.createTransactionRepository();


setTimeout(() => {
  
const address = symbol.Address.createFromRawAddress(window.SSS.activeAddress);

const dom_addr = document.getElementById('wallet-addr');
dom_addr.innerText = address.pretty();                      // address.pretty() アドレスがハイフンで区切られた文字列で表示され見やすくなる

accountHttp.getAccountInfo(address)
  .toPromise()
  .then((accountInfo) => {
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '310378C18A140D1B') {
        const dom_xym = document.getElementById('xembook-tomato');
        dom_xym.innerText = `📖🍅 : ${m.amount.compact()} / xembook`;    // xembook.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '5A8F12439B09B33E') {
        const dom_xym = document.getElementById('shizui-tomato');
        dom_xym.innerText = `🦷🍅 : ${m.amount.compact()} / shizui`;       // shizui.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '717C14465A99FBA4') {
        const dom_xym = document.getElementById('tenxym-tomato');
        dom_xym.innerText = `🎮🍅 : ${m.amount.compact()} / tenxym`;       // tenxym.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '613E6D0FC11F4530') {
        const dom_xym = document.getElementById('toshi-tomato');
        dom_xym.innerText = `🦁🍅 : ${m.amount.compact()} / toshi`;       // toshi.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '581B528745FE0F3B') {
        const dom_xym = document.getElementById('pasomi-tomato');
        dom_xym.innerText = `🖥🍅 : ${m.amount.compact()} / pasomi`;       // pasomi.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '22EB02FCBC661527') {
        const dom_xym = document.getElementById('nononon-tomato');
        dom_xym.innerText = `🐰🍅 : ${m.amount.compact()} / nononon`;       // nononon.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '725A2499CC6614D9') {
        const dom_xym = document.getElementById('ulty-tomato');
        dom_xym.innerText = `🏇🍅 : ${m.amount.compact()} / ulty`;       // ulty.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '509A58B6FDFFC197') {
        const dom_xym = document.getElementById('hanabatake-tomato');
        dom_xym.innerText = `🌻🍅 : ${m.amount.compact()} / hanabatake`;       // hanabatake.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '0B7766A119D5E4B5') {
        const dom_xym = document.getElementById('cat-tomato');
        dom_xym.innerText = `🐱🍅 : ${m.amount.compact()} / cat`;       // cat.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '54ACEAF1E8632DF1') {
        const dom_xym = document.getElementById('temple01-tomato');
        dom_xym.innerText = `👀🍅 : ${m.amount.compact()} / temple01`;       // temple01.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '0C1058BB20787615') {
        const dom_xym = document.getElementById('radio-tomato');
        dom_xym.innerText = `📻🍅 : ${m.amount.compact()} / radio`;       // temple01.tomato
      }
    }
    
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '23A72A2876482029') {
        const dom_xym = document.getElementById('wecanch-tomato');
        dom_xym.innerText = `👩‍🚀🍅 : ${m.amount.compact()} / webcanch`;       // wecanch.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '5FF7741F1AE008DE') {
        const dom_xym = document.getElementById('kotopapa-tomato');
        dom_xym.innerText = `👦🍅 : ${m.amount.compact()} / kotopapa`;       // kotopapa.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '220DE9C58B8E0E71') {
        const dom_xym = document.getElementById('u2yasan-tomato');
        dom_xym.innerText = `🥚🍅 : ${m.amount.compact()} / u2yasan`;       // u2yasan.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '3F0B0C29CFD04713') {
        const dom_xym = document.getElementById('mtn-tomato');
        dom_xym.innerText = `🐐🍅 : ${Math.trunc(m.amount.compact()/1000000)} / mtn`;       // mtn.tomato 　 整数の部分だけ表示する
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '4F2DC8BA863044C6') {
        const dom_xym = document.getElementById('fukurou-tomato');
        dom_xym.innerText = `🦉🍅 : ${m.amount.compact()} / fukurou`;       // fukurou.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '7B9DC57CC154B2E0') {
        const dom_xym = document.getElementById('hirosansymbol-tomato');
        dom_xym.innerText = `🐤🍅 : ${m.amount.compact()} / hirosansymbol`;       // hirosansymbol.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '14ABF8C934D15151') {
        const dom_xym = document.getElementById('cryptobeliever-tomato');
        dom_xym.innerText = `🎩🍅 : ${m.amount.compact()} / cryptobeliever`;       // cryptobeliever.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '3898DDE9567D0A34') {
        const dom_xym = document.getElementById('anthony14w-tomato');
        dom_xym.innerText = `🐈🍅 : ${m.amount.compact()} / anthony14w`;       // anthony14w.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '5D9D5C6BFE968E2C') {
        const dom_xym = document.getElementById('sheva-tomato');
        dom_xym.innerText = `👧🍅 : ${m.amount.compact()} / sheva`;       // sheva.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '05E545728E183EFA') {
        const dom_xym = document.getElementById('drugn-tomato');
        dom_xym.innerText = `🏃‍♀️🍅 : ${m.amount.compact()} / drugn`;       // drugn.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '6BE5318AED3E68DB') {
        const dom_xym = document.getElementById('exym-tomato');
        dom_xym.innerText = `🧸🍅 : ${m.amount.compact()} / exym`;       // exym.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '7542C49F2737C4DE') {
        const dom_xym = document.getElementById('hatchet-tomato');
        dom_xym.innerText = `🪓🍅 : ${m.amount.compact()} / hatchet`;       // hatchet.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '078FA8E61BB9BE9C') {
        const dom_xym = document.getElementById('jammin-tomato');
        dom_xym.innerText = `🐂🍅 : ${m.amount.compact()} / jammin`;       // jammin.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '6A44EB5C0F8ED639') {
        const dom_xym = document.getElementById('klim-tomato');
        dom_xym.innerText = `🙋‍♂️🍅 : ${Math.trunc(m.amount.compact()/10)} / klim`;       // klim.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '7ADA0B238BB2E29D') {
        const dom_xym = document.getElementById('angelxym-tomato');
        dom_xym.innerText = `👼🍅 : ${Math.trunc(m.amount.compact()/10)} / angelxym`;       // angelxym.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '7F1B538B65B0168C') {
        const dom_xym = document.getElementById('karriz-tomato');
        dom_xym.innerText = `👨‍🎤🍅 : ${m.amount.compact()} / karriz`;       // karriz.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '7930B6BDAED90925') {
        const dom_xym = document.getElementById('gmr-tomato');
        dom_xym.innerText = `🤖🍅 : ${m.amount.compact()} / gmr`;       // gmr.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '7691E0E6C687B9C0') {
        const dom_xym = document.getElementById('jaguar-tomato');
        dom_xym.innerText = `🐆🍅 : ${m.amount.compact()} / jaguar`;       // jaguar.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '7969D73DA7ECB674') {
        const dom_xym = document.getElementById('baha-tomato');
        dom_xym.innerText = `🦸‍♂️🍅 : ${m.amount.compact()} / baha`;       // baha.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '7A848BE35EA4C849') {
        const dom_xym = document.getElementById('shin-tomato');
        dom_xym.innerText = `🌞🍅 : ${m.amount.compact()} / shin`;       // shin.tomato
      }
    }
  
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '6BED913FA20223F8') {
        const dom_xym = document.getElementById('xym-balance');
        dom_xym.innerText = `XYM : ${m.amount.compact()/1000000}`;       // XYM Balance
      }
    }
  })
 
    //　リスナーでトランザクションを検知し、音を鳴らす
  
 
  nsRepo = repositoryFactory.createNamespaceRepository();
  
  wsEndpoint = NODE_URL.replace('http', 'ws') + "/ws";
  listener = new symbol.Listener(wsEndpoint,nsRepo,WebSocket);
  
  
  listener.open().then(() => {

    //Websocketが切断される事なく、常時監視するために、ブロック生成(約30秒毎)の検知を行う

    //ブロック生成の検知
    listener.newBlock()
    .subscribe(block=>{
      console.log(block);
      console.log("timestamp=");                                            /////////////////////
      const timestamp = 1615853185 + (parseInt(block.timestamp.toHex(),10)/1000);   ///////////////
      const date = new Date(timestamp);
      console.log(date.getTime());
      console.log(date); 
    });
    
    //承認トランザクションの検知
    listener.confirmed(address)
    .subscribe(tx=>{
        //受信後の処理を記述
        console.log(tx);
         // 承認音を鳴らす
        var my_audio = new Audio("https://github.com/symbol/desktop-wallet/raw/dev/src/views/resources/audio/ding2.ogg");
        my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
      
      const M_ID = tx.mosaics[0].id.toHex();
    
      if (M_ID === "310378C18A140D1B" || M_ID === "5A8F12439B09B33E" || M_ID === "717C14465A99FBA4" || M_ID === "613E6D0FC11F4530" || M_ID === "581B528745FE0F3B" || M_ID === "22EB02FCBC661527" || M_ID === "725A2499CC6614D9" || M_ID === "509A58B6FDFFC197" || M_ID === "0B7766A119D5E4B5" || M_ID === "54ACEAF1E8632DF1" || M_ID === "0C1058BB20787615" || M_ID === "23A72A2876482029" || M_ID === "5FF7741F1AE008DE" || M_ID === "220DE9C58B8E0E71" || M_ID === "3F0B0C29CFD04713" || M_ID === "4F2DC8BA863044C6" || M_ID === "7B9DC57CC154B2E0" || M_ID === "14ABF8C934D15151" || M_ID === "3898DDE9567D0A34" || M_ID === "5D9D5C6BFE968E2C" || M_ID === "05E545728E183EFA" || M_ID === "6BE5318AED3E68DB" || M_ID === "7542C49F2737C4DE" || M_ID === "078FA8E61BB9BE9C" || M_ID === "6A44EB5C0F8ED639" || M_ID === "7ADA0B238BB2E29D" || M_ID === "7F1B538B65B0168C" || M_ID === "7930B6BDAED90925" || M_ID === "7691E0E6C687B9C0" || M_ID === "7969D73DA7ECB674" || M_ID === "7A848BE35EA4C849") { // tomataoモザイクの時鳴らす
         my_audio.play();  //サウンドを再生
         window.setTimeout(function(){location.reload();},2000); // 2秒後にキャッシュを利用してページをリロード
      }
       
    });

    //未承認トランザクションの検知
    listener.unconfirmedAdded(address)
    .subscribe(tx=>{
        //受信後の処理を記述
        console.log(tx);
      　　// 未承認トランザクション音を鳴らす
        var my_audio = new Audio("https://github.com/mikunNEM/SSS_tomato/blob/main/tomatina.ogg?raw=true");  // トマティーナ
        //var my_audio = new Audio("https://github.com/symbol/desktop-wallet/raw/dev/src/views/resources/audio/ding.ogg");
        my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
      
      const M_ID = tx.mosaics[0].id.toHex();
    
      if (M_ID === "310378C18A140D1B" || M_ID === "5A8F12439B09B33E" || M_ID === "717C14465A99FBA4" || M_ID === "613E6D0FC11F4530" || M_ID === "581B528745FE0F3B" || M_ID === "22EB02FCBC661527" || M_ID === "725A2499CC6614D9" || M_ID === "509A58B6FDFFC197" || M_ID === "0B7766A119D5E4B5" || M_ID === "54ACEAF1E8632DF1" || M_ID === "0C1058BB20787615" || M_ID === "23A72A2876482029" || M_ID === "5FF7741F1AE008DE" || M_ID === "220DE9C58B8E0E71" || M_ID === "3F0B0C29CFD04713" || M_ID === "4F2DC8BA863044C6" || M_ID === "7B9DC57CC154B2E0" || M_ID === "14ABF8C934D15151" || M_ID === "3898DDE9567D0A34" || M_ID === "5D9D5C6BFE968E2C" || M_ID === "05E545728E183EFA" || M_ID === "6BE5318AED3E68DB" || M_ID === "7542C49F2737C4DE" || M_ID === "078FA8E61BB9BE9C" || M_ID === "6A44EB5C0F8ED639" || M_ID === "7ADA0B238BB2E29D" || M_ID === "7F1B538B65B0168C" || M_ID === "7930B6BDAED90925" || M_ID === "7691E0E6C687B9C0" || M_ID === "7969D73DA7ECB674" || M_ID === "7A848BE35EA4C849") { // tomatoモザイクの時鳴らす
        my_audio.play();  //サウンドを再生  
      }  
    });   
  });
  
  
  // ////////////////////////
  
                                  // トランザクション履歴を取得する
const searchCriteria = {                                   
  group: symbol.TransactionGroup.Confirmed,
  address,
  pageNumber: 1,
  pageSize: 20,
  order: symbol.Order.Desc,
};


transactionHttp
  .search(searchCriteria)
  .toPromise()
  .then((txs) => {
    const dom_txInfo = document.getElementById('wallet-transactions');
    
    console.log("dom_txInfo="); ////////////////
    console.log(dom_txInfo);    ////////////////
    
    for (let tx of txs.data) {   //    配列をループ処理
      console.log("tx=");      ////////////////////
      console.log(tx);        ////////////////////
      const dom_tx = document.createElement('div');
      const dom_txType = document.createElement('div');
      const dom_hash = document.createElement('div');
      const dom_signer_address = document.createElement('div');
      const dom_recipient_address = document.createElement('div');
      const dom_amount = document.createElement('div');
      const dom_message = document.createElement('div');

      dom_txType.innerText = `Tx Type : ${getTransactionType(tx.type)}`;        //　文字列の結合 　Tx タイプ
      //dom_hash.innerText = `Tx Hash : ${tx.transactionInfo.hash}`;              //  文字列の結合　 Tx ハッシュ
      dom_hash.innerHTML = `Tx Hash : <a href="https://symbol.fyi/transactions/${tx.transactionInfo.hash}" target="_blank" rel="noopener noreferrer"><small>${tx.transactionInfo.hash}</small></a>`;
      dom_signer_address.innerText = `From : ${tx.signer.address.address}`;    //  文字列の結合　送信者 
      
    if (tx.type === 16724) {  // Transfer の時だけ実行する
      dom_recipient_address.innerText = `To   : ${tx.recipientAddress.address}`;//  文字列の結合　宛先
      
      console.log("toHex MOSAIC ID =");   //////////////////////////////////////
      console.log(tx.mosaics[0].id.toHex());  //////////////////////////////////
      
     switch(tx.mosaics[0].id.toHex()){      
      case "310378C18A140D1B": //📖
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 📖🍅xembook.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">📖🍅xembook.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量 
        }
        break;     
      case "5A8F12439B09B33E": //🦷   
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🦷🍅shizui.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🦷🍅shizui.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量 
        }
        break;      
      case "717C14465A99FBA4":  //🎮
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🎮🍅tenxym.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🎮🍅tenxym.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量 
        }
        break;        
      case "613E6D0FC11F4530": //🦁  
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🦁🍅toshi.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🦁🍅toshi.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量 
        }
        break;         
      case "581B528745FE0F3B": //🖥
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🖥🍅pasomi.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🖥🍅pasomi.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量 
        }
        break;        
      case "22EB02FCBC661527": //🐰
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🐰🍅nononon.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🐰🍅nononon.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;        
      case "725A2499CC6614D9": //🏇
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🏇🍅ulty.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🏇🍅ulty.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;        
      case "509A58B6FDFFC197": //🌻
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🌻🍅hanabatake.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🌻🍅hanabatake.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;         
      case "0B7766A119D5E4B5": //🐱
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🐱🍅cat.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🐱🍅cat.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;        
      case "54ACEAF1E8632DF1": //👀
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 👀🍅temple01.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">👀🍅temple01.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;         
      case "0C1058BB20787615": //📻
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 📻🍅radio.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">📻🍅radio.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;         
      case "23A72A2876482029": //👩‍🚀
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 👩‍🚀🍅wecanch.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">👩‍🚀🍅wecanch.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;        
      case "5FF7741F1AE008DE": //👦
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 👦🍅kotopapa.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">👦🍅kotopapa.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;         
      case "220DE9C58B8E0E71": //🥚
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🥚🍅u2yasan.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🥚🍅u2yasan.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;       
      case "3F0B0C29CFD04713": //🐐
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🐐🍅mtn.tomato : ${Math.trunc(tx.mosaics[0].amount.lower/1000000)}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🐐🍅mtn.tomato ➡️ 😳 : ${Math.trunc(tx.mosaics[0].amount.lower/1000000)}</font>`;     // 　数量
        }
        break;
    ////
      case "4F2DC8BA863044C6": //🦉
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🦉🍅fukurou.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🦉🍅fukurou.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;        
      case "7B9DC57CC154B2E0": //🐤
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🐤🍅hirosansymbol.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🐤🍅hirosansymbol.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;
      case "14ABF8C934D15151": //🎩
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🎩🍅cryptobeliever.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🎩🍅cryptobeliever.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;
      case "3898DDE9567D0A34": //🐈
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🐈🍅anthony14w.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🐈🍅anthony14w.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;
      case "5D9D5C6BFE968E2C": //👧
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 👧🍅sheva.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">👧🍅sheva.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;
      case "05E545728E183EFA": //🏃‍♀️
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🏃‍♀️🍅drugn.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🏃‍♀️🍅drugn.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break; 
      case "6BE5318AED3E68DB": //🧸
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🧸🍅exym.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🧸🍅exym.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;    
      case "7542C49F2737C4DE": //🪓
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🪓🍅hatchet.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🪓🍅hatchet.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;    
      case "078FA8E61BB9BE9C": //🐂
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🐂🍅jammin.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🐂🍅jammin.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break; 
      case "6A44EB5C0F8ED639": //🙋‍♂️
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🙋‍♂️🍅klim.tomato : ${Math.trunc(tx.mosaics[0].amount.lower/10)}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🙋‍♂️🍅klim.tomato ➡️ 😳 : ${Math.trunc(tx.mosaics[0].amount.lower/10)}</font>`;     // 　数量
        }
        break;
      case "7ADA0B238BB2E29D": //👼
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 👼🍅angelxym.tomato : ${Math.trunc(tx.mosaics[0].amount.lower/10)}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">👼🍅angelxym.tomato ➡️ 😳 : ${Math.trunc(tx.mosaics[0].amount.lower/10)}</font>`;     // 　数量
        }
        break;    
      case "7F1B538B65B0168C": //👨‍🎤
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 👨‍🎤🍅karriz.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">👨‍🎤🍅karriz.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;        
      case "7930B6BDAED90925": //🤖
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🤖🍅gmr.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🤖🍅gmr.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break; 
      case "7691E0E6C687B9C0": //🐆
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🐆🍅jaguar.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🐆🍅jaguar.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;    
      case "7969D73DA7ECB674": //🦸‍♂️
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🦸‍♂️🍅baha.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🦸‍♂️🍅baha.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;    
      case "7A848BE35EA4C849": //☀️
        if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
           dom_amount.innerHTML = `<font color="#FF0000">🥳 ➡️ 🌞🍅shin.tomato : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }else { 
           dom_amount.innerHTML = `<font color="#008000">🌞🍅shin.tomato ➡️ 😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
        }
        break;    
                 
        default:
        console.log("不明なトマトモザイクです"); 
        break;  
     }
      
      
      dom_message.innerText = `Message : ${tx.message.payload}`;     // 　メッセージ 
      
       const M_ID = tx.mosaics[0].id.toHex();
    
       if (M_ID === "310378C18A140D1B" || M_ID === "5A8F12439B09B33E" || M_ID === "717C14465A99FBA4" || M_ID === "613E6D0FC11F4530" || M_ID === "581B528745FE0F3B" || M_ID === "22EB02FCBC661527" || M_ID === "725A2499CC6614D9" || M_ID === "509A58B6FDFFC197" || M_ID === "0B7766A119D5E4B5" || M_ID === "54ACEAF1E8632DF1" || M_ID === "0C1058BB20787615" || M_ID === "23A72A2876482029" || M_ID === "5FF7741F1AE008DE" || M_ID === "220DE9C58B8E0E71" || M_ID === "3F0B0C29CFD04713" || M_ID === "4F2DC8BA863044C6" || M_ID === "7B9DC57CC154B2E0" || M_ID === "14ABF8C934D15151" || M_ID === "3898DDE9567D0A34" || M_ID === "5D9D5C6BFE968E2C" || M_ID === "05E545728E183EFA" || M_ID === "6BE5318AED3E68DB" || M_ID === "7542C49F2737C4DE" || M_ID === "078FA8E61BB9BE9C" || M_ID === "6A44EB5C0F8ED639" || M_ID === "7ADA0B238BB2E29D" || M_ID === "7F1B538B65B0168C" || M_ID === "7930B6BDAED90925" || M_ID === "7691E0E6C687B9C0" || M_ID === "7969D73DA7ECB674" || M_ID === "7A848BE35EA4C849") { //tomatoモザイクの時だけ表示する
     　  dom_tx.appendChild(dom_txType);                    // dom_txType をdom_txに追加 
     　  dom_tx.appendChild(dom_hash);                      // dom_hash をdom_txに追加
     　  dom_tx.appendChild(dom_signer_address);            // dom_signer_address をdom_txに追加
     　  dom_tx.appendChild(dom_recipient_address);         // dom_recipient_address をdom_txに追加
     　  dom_tx.appendChild(dom_amount);                    // dom_amount をdom_txに追加
     　  dom_tx.appendChild(dom_message);    　             // dom_message をdom_txに追加
    　   dom_tx.appendChild(document.createElement('hr'));  // 水平線を引く
    　   dom_txInfo.appendChild(dom_tx);                    // トランザクション情報を追加        
    　  } 
      }
    }
  })
}, 3000)

// Transaction Type を返す関数
function getTransactionType (type) { // https://symbol.github.io/symbol-sdk-typescript-javascript/1.0.3/enums/TransactionType.html
  switch(type){
  　case 16720:
    　return 'ACCOUNT_ADDRESS_RESTRICTION';
    　break;
  　case 16716:
    　return 'ACCOUNT_KEY_LINK';
    　break;  
    case 16708:
    　return 'ACCOUNT_METADATA';
    　break;
    case 16976:
    　return 'ACCOUNT_MOSAIC_RESTRICTION';
    　break;
    case 17232:
    　return 'ACCOUNT_OPERATION_RESTRICTION';
    　break;
    case 16974:
    　return 'ADDRESS_ALIAS';
    　break;
    case 16961:
    　return 'AGGREGATE_BONDED';
    　break;
    case 16705:
    　return 'AGGREGATE_COMPLETE';
    　break;
    case 16712:
    　return 'HASH_LOCK';
    　break;
    case 16977:
    　return 'MOSAIC_ADDRESS_RESTRICTION';
    　break;
    case 17230:
    　return 'MOSAIC_ALIAS';
    　break;
    case 16717:
    　return 'MOSAIC_DEFINITION';
    　break;
    case 16721:
    　return 'MOSAIC_GLOBAL_RESTRICTION';
    　break;
    case 16964:
    　return 'MOSAIC_METADATA';
    　break;
    case 16973:
    　return 'MOSAIC_SUPPLY_CHANGE';
    　break;
    case 17229:
    　return 'MOSAIC_SUPPLY_REVOCATION';
    　break;
    case 16725:
    　return 'MULTISIG_ACCOUNT_MODIFICATION';
    　break;
    case 17220:
    　return 'NAMESPACE_METADATA';
    　break;
    case 16718:
    　return 'NAMESPACE_REGISTRATION';
    　break;
    case 16972:
    　return 'NODE_KEY_LINK';
    　break;
    case 0:
    　return 'RESERVED';
    　break;
    case 16722:
    　return 'SECRET_LOCK';
    　break;
    case 16978:
    　return 'SECRET_PROOF';
    　break;
    case 16724:
    　return 'TRANSFER';
    　break;
    case 16707:
    　return 'VOTING_KEY_LINK';
    　break;
    case 16963:
    　return 'VRF_KEY_LINK';
    　break;  
    default:
  　　return 'Other';
  }
}


// handleSSS関数はトランザクションを作成し、window.SSS.setTransaction関数を実行しSSSにトランザクションを登録します。そしてwindow.SSS.requestSign関数を実行し、SSSを用いた署名をユーザ－に要求します。

function handleSSS() {
  console.log('handle sss');
  const MOSAIC_ID = document.getElementById('tomato4').value;
  const addr = document.getElementById('form-addr').value;
  const amount = document.getElementById('form-amount').value;
  const message = document.getElementById('form-message').value;
  
  const tx = symbol.TransferTransaction.create(        // トランザクションを生成
    symbol.Deadline.create(EPOCH),
    symbol.Address.createFromRawAddress(addr),
    [
      new symbol.Mosaic(
        new symbol.MosaicId(MOSAIC_ID),
        symbol.UInt64.fromUint(Number(amount))
      )
    ],
    symbol.PlainMessage.create(message),
    NET_TYPE,
    symbol.UInt64.fromUint(30000)
  )

  window.SSS.setTransaction(tx);                 // SSSにトランザクションを登録

  window.SSS.requestSign().then(signedTx => {   // SSSを用いた署名をユーザーに要求
    console.log('signedTx', signedTx);
    transactionHttp.announce(signedTx);
    
    
  })
}

   // ポップアップ 表示
window.onload = function() {
   var popup = document.getElementById('js-popup');
    
    if(!popup) return;   
    popup.classList.add('is-show');
   
  
   var blackBg = document.getElementById('js-black-bg');
   var closeBtn = document.getElementById('js-close-btn');
    
   closePopUp(blackBg);
   closePopUp(closeBtn);

   function closePopUp(elem) {
     if(!elem) return;
     elem.addEventListener('click', function() {       
       popup.classList.remove('is-show');            
     })
   }
 }

