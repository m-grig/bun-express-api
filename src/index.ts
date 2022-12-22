console.log('starting api...')
export default {
  port: 3000,
  fetch(request: Request) {
    console.log('🌐 request recieved:',request.method)
    console.log('payload:',request.body)
    console.log('full request:',request)
    return basicResponse()
  },
};

const basicResponse = () => {
  return new Response(`Response genereated`, {
    headers: { "content-type": "text/plain" },
  });
}