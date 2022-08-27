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
dom_addr.innerText = address.pretty();                                       // address.pretty() アドレスがハイフンで区切られた文字列で表示され見やすくなる

accountHttp.getAccountInfo(address)
  .toPromise()
  .then((accountInfo) => {
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '310378C18A140D1B') {
        const dom_xym = document.getElementById('xembook-tomato');
        dom_xym.innerText = `📖🍅 : ${m.amount.compact()}`;    // Tomato Balance
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '5A8F12439B09B33E') {
        const dom_xym = document.getElementById('shizui-tomato');
        dom_xym.innerText = `🦷🍅 : ${m.amount.compact()}`;       // shizui.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '717C14465A99FBA4') {
        const dom_xym = document.getElementById('tenxym-tomato');
        dom_xym.innerText = `🎮🍅 : ${m.amount.compact()}`;       // tenxym.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '613E6D0FC11F4530') {
        const dom_xym = document.getElementById('toshi-tomato');
        dom_xym.innerText = `🦁🍅 : ${m.amount.compact()}`;       // toshi.tomato
      }
    }
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === '581B528745FE0F3B') {
        const dom_xym = document.getElementById('pasomi-tomato');
        dom_xym.innerText = `🖥🍅 : ${m.amount.compact()}`;       // toshi.tomato
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
    });
    
    //承認トランザクションの検知
    listener.confirmed(address)
    .subscribe(tx=>{
        //受信後の処理を記述
        console.log(tx);
         // 承認音を鳴らす
        var my_audio = new Audio("https://github.com/symbol/desktop-wallet/raw/dev/src/views/resources/audio/ding2.ogg");
        my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
      if (tx.mosaics[0].id.id.lower === 2316569883 || 2601104190 || 1520040868 || 3240052016 || 1174277947) { // tomataoモザイクの時鳴らす
         my_audio.play();  //サウンドを再生
         window.setTimeout(function(){location.reload(false);},2000); // 2秒後にキャッシュを利用してページをリロード
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
      if (tx.mosaics[0].id.id.lower === 2316569883 || 2601104190 || 1520040868 || 3240052016 || 1174277947) { // tomatoモザイクの時鳴らす
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
      
     
      switch(tx.mosaics[0].id.id.lower){
        case 2316569883:
          Tomato_Type = '📖';
          break;
        case 2316569883:
          Tomato_Type = '🦷';
          break;
        case 2316569883:
          Tomato_Type = '🎮';
          break;
        case 2316569883:
          Tomato_Type = '🦁';
          break;
        case 2316569883:
          Tomato_Type = '🖥';
          break;
        default:
  　　　　　console.log('不明なトマトタイプです');  
      }
    
      
    if (tx.type === 16724) {  // Transfer の時だけ実行する
      
      dom_recipient_address.innerText = `To   : ${tx.recipientAddress.address}`;//  文字列の結合　宛先
     
      if(tx.signer.address.address === address.address) {  // 送信アドレスとウォレットのアドレスが同じかどうかで表示を変える
         dom_amount.innerHTML = `<font color="#FF0000">🥳➡️${Tomato_Type}🍅 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量
      }else { 
         dom_amount.innerHTML = `<font color="#008000">${Tomato_Type}🍅➡️😳 : ${tx.mosaics[0].amount.lower}</font>`;     // 　数量 
      }
      dom_message.innerText = `Message : ${tx.message.payload}`;     // 　メッセージ 
      
    
    　if (tx.mosaics[0].id.id.lower === 2316569883 || 2601104190 || 1520040868 || 3240052016 || 1174277947) { //tomatoモザイクの時だけ表示する
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
    symbol.UInt64.fromUint(100000)
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

