// async function getArtData() {
//   try {
//     let responses = await Promise.all([
//       fetch("https://api.artic.edu/api/v1/artworks/129883"),
//       fetch("https://api.artic.edu/api/v1/artworks/129884"),
//       fetch("https://api.artic.edu/api/v1/artworks/129885"),
//     ]);

//     let jsonData = await Promise.all(
//       responses.map((response) => response.json())
//     );

//     console.log(jsonData[0].data.title);

//     let titles = jsonData.map((item) => item.data.title);
//     console.log(titles);
//   } catch (error) {
//     throw new Error("Can't fetch data", error);
//   }
// }

// getArtData();

async function getArtData() {
  try {
    let responses = await Promise.all([
      fetch("https://api.artic.edu/api/v1/artworks/129883"),
      fetch("https://api.artic.edu/api/v1/artworks/129884"),
      fetch("https://api.artic.edu/api/v1/artworks/129872"),
      fetch("https://api.artic.edu/api/v1/artworks/129880"),
    ]);

    let jsonData = await Promise.all(
      responses.map((response) => response.json())
    );

    for (let i = 0; i < jsonData.length; i++) {
      let title = jsonData[i].data.title;
      document.getElementById(`artTitle${i + 1}`).textContent = title;
    }
  } catch (error) {
    throw new Error("Can't fetch data", error);
  }
}

getArtData();
