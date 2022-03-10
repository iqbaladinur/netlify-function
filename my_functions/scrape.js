const getMetaData = require('metadata-scraper')

exports.handler = async function(event, context) {
  // your server-side functionality
  if (event.httpMethod === 'GET') {
    const url = event.queryStringParameters.url || '';
    try {
      const result = await getMetaData(url);
      return {
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } catch (error) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: error.message }),
      };
    }
  } else {
    return {
      statusCode: 422,
      body: JSON.stringify({ message: 'not allowed' }),
    };
  }
}