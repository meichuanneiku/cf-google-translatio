export default {
  async fetch(request, env, ctx) {
    let url = new URL(request.url);
    if(url.pathname.startsWith('/')){
      url.hostname="translate.googleapis.com"; 
      let new_request = new Request(url, request)
      let response=await fetch(new_request)
      if(response.status!==200){
        return new Response(JSON.stringify({code:1,msg:response.text}), {
          status: 200, 
          headers: {
            'content-type': 'application/json',
          },
        });
      }


      let jsonData = await response.json();
      let str=jsonData[0].map(it=>{
        return it[0]
      })

      let data={code:0,msg:"ok",text:str.join('')}

      return new Response(JSON.stringify(data), {
        status: 200, 
        headers: {
          'content-type': 'application/json', 
        },
      });
    }
    return await env.ASSETS.fetch(request);
  },
};
