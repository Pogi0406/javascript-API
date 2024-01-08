async function getArtData() {
  const headers = {
    Authorization: "A8BB3ripjEyB4dUbPuWRQi9GT0XdY99HICdNlZvLNt4lTFVhVXs644rx",
  };

  try {
    const responses = await Promise.all([
      fetch("https://api.pexels.com/v1/photos/19548535", { headers }),
      fetch("https://api.pexels.com/v1/photos/19550587", { headers }),
      fetch("https://api.pexels.com/v1/photos/19557234", { headers }),
      fetch("https://api.pexels.com/v1/photos/19560882", { headers }),
      fetch("https://api.pexels.com/v1/photos/19560945", { headers }),
      fetch("https://api.pexels.com/v1/photos/19561004", { headers }),
    ]);

    const jsonData = await Promise.all(
      responses.map((response) => response.json())
    );

    console.log(jsonData);

    for (let i = 0; i < jsonData.length; i++) {
      const photoSrc = jsonData[i].src.medium;
      const title = jsonData[i].photographer;

      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<div class="card__header">
                          <img class="card__image" src="${photoSrc}"/>
                          </div>
                          <div class="card__main">
                            <h3>Photographer:</h3>
                            <p>"${title}"</p>
                        </div>`;

      document.body.append(card);
    }
  } catch (error) {
    throw new Error("Can't fetch data", error);
  }
}

getArtData();
