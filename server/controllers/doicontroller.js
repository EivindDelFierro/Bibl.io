const doiController = {};

// divise middleware to process api request
doiController.bibtex = async (req, res, next) => {
  console.log("Entering bibtex middleware")
  const doiNumber = req.query.doi;
  const doiAddress = 'https://doi.org/';

  await fetch(doiAddress + doiNumber, {
    headers: {
      'Content-Type': 'application/x-bibtex',
      'Accept': 'application/x-bibtex; charset=utf-8'
    },
    redirect: "follow"
  })

    .then(res => res.arrayBuffer())
    .then(buffer => {
      const streamDecoder = new TextDecoder();
      
      res.locals.bibtex = streamDecoder.decode(buffer);
      
      next();
    })
    .catch(error => {
      console.log("ERROR: Exiting doiController.bibtex middleware");

      next({
        log: "Fetch request error in doiController.bibtex.doiRequest",
        status: 400,
        message: {err: error}
      })
    })
}

module.exports = doiController