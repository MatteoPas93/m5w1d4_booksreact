import classes from "./AllTheBooks.module.css"
import { Card } from "react-bootstrap";
import React, { useState, useEffect } from 'react';

// const books = [
//   {
//     asin: "0316438960",
//     title: "The Last Wish: Introducing the Witcher",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
//     price: 9.59,
//     category: "fantasy",
//   },
//   {
//     asin: "0316389706",
//     title: "Sword of Destiny (The Witcher)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91uxJwnolDL.jpg",
//     price: 10.39,
//     category: "fantasy",
//   },
//   {
//     asin: "0786966246",
//     title: "D&D MORDENKAINEN'S TOME OF FOES (Dungeons & Dragons)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/8147MOLG%2BoL.jpg",
//     price: 27.94,
//     category: "fantasy",
//   },
//   {
//     asin: "1945683694",
//     title: "Destiny Grimoire Anthology, Volume II: Fallen Kingdoms",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91IHwcEy2DL.jpg",
//     price: 19.92,
//     category: "fantasy",
//   },
//   {
//     asin: "0786966254",
//     title: "D&D Waterdeep Dragon Heist HC (Dungeons & Dragons)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81Sfnxpke4L.jpg",
//     price: 34.61,
//     category: "fantasy",
//   },
//   {
//     asin: "0062059882",
//     title: "American Gods: The Tenth Anniversary Edition: A Novel",
//     img: "https://images-na.ssl-images-amazon.com/images/I/519mwdpzlmL.jpg",
//     price: 14.94,
//     category: "fantasy",
//   },
//   {
//     asin: "0345535413",
//     title:
//       "A Clash of Kings (HBO Tie-in Edition): A Song of Ice and Fire: Book Two",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91Pqmk8FzAL.jpg",
//     price: 14.31,
//     category: "fantasy",
//   },
//   {
//     asin: "0140157379",
//     title: "Haroun and the Sea of Stories",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91R8tRi2KTL.jpg",
//     price: 11.4,
//     category: "fantasy",
//   },
//   {
//     asin: "0553808044",
//     title:
//       "A Game of Thrones: The Illustrated Edition: A Song of Ice and Fire: Book One",
//     img: "https://images-na.ssl-images-amazon.com/images/I/A12tbaSby%2BL.jpg",
//     price: 28.06,
//     category: "fantasy",
//   },
//   {
//     asin: "0316228028",
//     title: "Stiletto: A Novel (The Rook Files)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51whAHbBsDL.jpg",
//     price: 10.37,
//     category: "fantasy",
//   },
//   {
//     asin: "0008288798",
//     title: "A Reaper at the Gates (Ember Quartet, Book 3)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91vFU0KCm9L.jpg",
//     price: 12.6,
//     category: "fantasy",
//   },
//   {
//     asin: "1250222060",
//     title:
//       "A Gathering of Shadows Collector's Edition: A Novel (Shades of Magic)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81Jw33fmYzL.jpg",
//     price: 18.85,
//     category: "fantasy",
//   },
//   {
//     asin: "0345548531",
//     title: "Staked: The Iron Druid Chronicles, Book Eight",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91eMFXdhM0L.jpg",
//     price: 7.59,
//     category: "fantasy",
//   },
//   {
//     asin: "1597808709",
//     title: "A Second Chance: The Chronicles of St. Mary's Book Three",
//     img: "https://images-na.ssl-images-amazon.com/images/I/714wSBJshRL.jpg",
//     price: 9.86,
//     category: "fantasy",
//   },
//   {
//     asin: "0062678108",
//     title: "The City of Brass: A Novel (The Daevabad Trilogy)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51AiOrm56BL.jpg",
//     price: 18.37,
//     category: "fantasy",
//   },
//   {
//     asin: "0316434604",
//     title: "Strange Practice (A Dr. Greta Helsing Novel)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/61WMUVR7PWL.jpg",
//     price: 12.67,
//     category: "fantasy",
//   },
//   {
//     asin: "0765319233",
//     title: "Chronicles of the Black Company",
//     img: "https://images-na.ssl-images-amazon.com/images/I/511RvCsDsTL.jpg",
//     price: 17.94,
//     category: "fantasy",
//   },
//   {
//     asin: "0345461533",
//     title: "The Conquering Sword of Conan (Conan of Cimmeria, Book 3)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81MoomxPd3L.jpg",
//     price: 17.79,
//     category: "fantasy",
//   },
//   {
//     asin: "0316452211",
//     title: "The Night Angel Trilogy: 10th Anniversary Edition",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71vON1PofOL.jpg",
//     price: 30.28,
//     category: "fantasy",
//   },
//   {
//     asin: "1943407355",
//     title: "The Dark Truth (The Dark Passage Series) (Volume 1)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51pm0mSSzwL.jpg",
//     price: 1.77,
//     category: "fantasy",
//   },
//   {
//     asin: "1524799556",
//     title: "A Song of Ice and Fire 2020 Calendar: Illustrations by John Howe",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91JJwFLoOsL.jpg",
//     price: 15.3,
//     category: "fantasy",
//   },
//   {
//     asin: "0399177574",
//     title: "Illidan: World of Warcraft: A Novel",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81khLUoMKaL.jpg",
//     price: 6.12,
//     category: "fantasy",
//   },
//   {
//     asin: "0316274119",
//     title: "An Echo of Things to Come (The Licanius Trilogy)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51xWXICigiL.jpg",
//     price: 18.73,
//     category: "fantasy",
//   },
//   {
//     asin: "1578562953",
//     title: "Edge of Eternity",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91Ft%2BN5q0sL.jpg",
//     price: 15.19,
//     category: "fantasy",
//   },
//   {
//     asin: "0756408997",
//     title: "Closer to Home (Valdemar: The Herald Spy)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/A1qDmoiER6L.jpg",
//     price: 21.19,
//     category: "fantasy",
//   },
//   {
//     asin: "110188603X",
//     title:
//       "A Dance with Dragons (HBO Tie-in Edition): A Song of Ice and Fire: Book Five: A Novel",
//     img: "https://images-na.ssl-images-amazon.com/images/I/813bxDL2PPL.jpg",
//     price: 9.1,
//     category: "fantasy",
//   },
//   {
//     asin: "0451414888",
//     title: "Dragon Fate: Book Six of The Age of Fire",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81qAK72OCYL.jpg",
//     price: 8.53,
//     category: "fantasy",
//   },
//   {
//     asin: "0765327740",
//     title: "Severed Souls: A Richard and Kahlan Novel",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51pXmun9LfL.jpg",
//     price: 17.84,
//     category: "fantasy",
//   },
//   {
//     asin: "0345430441",
//     title: "Transcendence (The Second DemonWars Saga, Book 2)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71e1SKEZQOL.jpg",
//     price: 8.76,
//     category: "fantasy",
//   },
//   {
//     asin: "4805310812",
//     title:
//       "The Tale of Genji: The Arthur Waley Translation of Lady Murasaki's Masterpiece with a new foreword by Dennis Washburn (Tuttle Classics)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/918dqgtXhdL.jpg",
//     price: 22.21,
//     category: "fantasy",
//   },
//   {
//     asin: "0425262227",
//     title: "The Tower (Guardians of Destiny)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91qzAwU5wcL.jpg",
//     price: 9.52,
//     category: "fantasy",
//   },
//   {
//     asin: "0345430816",
//     title: "The Drawing of the Dark: A Novel (Del Rey Impact)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81UHbZbNLvL.jpg",
//     price: 13.73,
//     category: "fantasy",
//   },
//   {
//     asin: "0062068687",
//     title: "The Long Earth",
//     img: "https://images-na.ssl-images-amazon.com/images/I/517wycdvwBL.jpg",
//     price: 8.77,
//     category: "fantasy",
//   },
//   {
//     asin: "0756413842",
//     title: "The Master of Dreams (The Dreamscape Trilogy)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91Ciw5J0wXL.jpg",
//     price: 11.6,
//     category: "fantasy",
//   },
//   {
//     asin: "0765316544",
//     title: "Toll the Hounds: Book Eight of The Malazan Book of the Fallen",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71gHp0g9ihL.jpg",
//     price: 23.55,
//     category: "fantasy",
//   },
//   {
//     asin: "0765375079",
//     title:
//       "A Natural History of Dragons: A Memoir by Lady Trent (The Lady Trent Memoirs)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81mOMXgOdkL.jpg",
//     price: 10.37,
//     category: "fantasy",
//   },
//   {
//     asin: "0449011909",
//     title: "A Storm of Swords: A Song of Ice and Fire: Book Three",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81xHtJLehXL.jpg",
//     price: 67.4,
//     category: "fantasy",
//   },
//   {
//     asin: "0316302775",
//     title: "Shadowborn (Seraphim)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51Vfe9jrxML.jpg",
//     price: 10.94,
//     category: "fantasy",
//   },
//   {
//     asin: "1784966215",
//     title: "Plague Garden (1) (Hallowed Knights)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81NRqR0XqQL.jpg",
//     price: 10.45,
//     category: "fantasy",
//   },
//   {
//     asin: "1984806378",
//     title: "The Library of the Unwritten (A Novel from Hell's Library)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81tm0aYeBRL.jpg",
//     price: 11.54,
//     category: "fantasy",
//   },
//   {
//     asin: "1846771870",
//     title: "Tros of Samothrace 4: City of the Eagles",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71aOQgjMjTL.jpg",
//     price: 6.24,
//     category: "fantasy",
//   },
//   {
//     asin: "0980084288",
//     title: "Griots: A Sword and Soul Anthology",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71KwIdhoaUL.jpg",
//     price: 14.87,
//     category: "fantasy",
//   },
//   {
//     asin: "0316077070",
//     title: "The Rebel Prince (The Moorehawke Trilogy)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71REEAYhw1L.jpg",
//     price: 14.28,
//     category: "fantasy",
//   },
//   {
//     asin: "0345503805",
//     title: "The Warded Man: Book One of The Demon Cycle",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91D7n-LlVDL.jpg",
//     price: 27.31,
//     category: "fantasy",
//   },
//   {
//     asin: "0316004197",
//     title: "The Edge of the World (Terra Incognita)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51tQiTuTcvL.jpg",
//     price: 8.75,
//     category: "fantasy",
//   },
//   {
//     asin: "147893333X",
//     title: "The Last Wish  (The Witcher Series, Book 1)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51zTIGhJG7L.jpg",
//     price: 21.6,
//     category: "fantasy",
//   },
//   {
//     asin: "0553567713",
//     title: "Into the Labyrinth (A Death Gate Novel)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91DgNRoiv-L.jpg",
//     price: 7.82,
//     category: "fantasy",
//   },
//   {
//     asin: "1499860846",
//     title: "The Seventh Scroll (2) (The Egyptian Series)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81j3E4E4lyL.jpg",
//     price: 13.49,
//     category: "fantasy",
//   },
//   {
//     asin: "0316242454",
//     title: "A Dance of Mirrors (Shadowdance 3)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51GWlXfaIbL.jpg",
//     price: 11.14,
//     category: "fantasy",
//   },
//   {
//     asin: "1597809152",
//     title:
//       "The Long and Short of It: Stories from the Chronicles of St. Mary's",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81fJjI8FtnL.jpg",
//     price: 11.05,
//     category: "fantasy",
//   },
//   {
//     asin: "0316190357",
//     title: "The Folly of the World",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71ScVeaHuUL.jpg",
//     price: 15.13,
//     category: "fantasy",
//   },
//   {
//     asin: "1784967866",
//     title: "Realmslayer (Warhammer: Age of Sigmar)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/714UsJGMFgL.jpg",
//     price: 29.57,
//     category: "fantasy",
//   },
//   {
//     asin: "0804178321",
//     title: "Half a King (Shattered Sea)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81lCGUkjf7L.jpg",
//     price: 17.85,
//     category: "fantasy",
//   },
//   {
//     asin: "0857667971",
//     title: "Ash Kickers (Smoke Eaters)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91cP5LzL9LL.jpg",
//     price: 7.19,
//     category: "fantasy",
//   },
//   {
//     asin: "0765331985",
//     title:
//       "Voyage of the Basilisk: A Memoir by Lady Trent (The Lady Trent Memoirs)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51GYZq2eWDL.jpg",
//     price: 14.01,
//     category: "fantasy",
//   },
//   {
//     asin: "1629620297",
//     title: "The Chained Adept: A Lost Wizard's Tale (Volume 1)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/510Umbm8zGL.jpg",
//     price: 15.96,
//     category: "fantasy",
//   },
//   {
//     asin: "149764867X",
//     title: "Slave Girl of Gor (Gorean Saga)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/513uxbKrK0L.jpg",
//     price: 17.17,
//     category: "fantasy",
//   },
//   {
//     asin: "1597802247",
//     title: "Infidel: Bel Dame Apocrypha Volume 2",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71rlrGRk9xL.jpg",
//     price: 13.36,
//     category: "fantasy",
//   },
//   {
//     asin: "0345540700",
//     title: "The High Druid's Blade: The Defenders of Shannara",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91rEIKBITuL.jpg",
//     price: 19.61,
//     category: "fantasy",
//   },
//   {
//     asin: "0765316528",
//     title: "The Bonehunters (The Malazan Book of the Fallen, Book 6)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81WunmsIRgL.jpg",
//     price: 24.34,
//     category: "fantasy",
//   },
//   {
//     asin: "1405925787",
//     title:
//       "Tomorrow: The spellbinding historical tale for readers who love The Night Circus and The Mermaid and Mrs Hancock",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91bgKs%2ByYaL.jpg",
//     price: 11.8,
//     category: "fantasy",
//   },
//   {
//     asin: "1497642418",
//     title: "The Face in the Frost",
//     img: "https://images-na.ssl-images-amazon.com/images/I/516XFxgttiL.jpg",
//     price: 10.84,
//     category: "fantasy",
//   },
//   {
//     asin: "0345352661",
//     title: "Guardians of the West (The Malloreon, Book 1)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91AiXb63YyL.jpg",
//     price: 8.72,
//     category: "fantasy",
//   },
//   {
//     asin: "0399177418",
//     title: "The Memory of Fire (The Waking Land)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91OvCAIaVUL.jpg",
//     price: 21.41,
//     category: "fantasy",
//   },
//   {
//     asin: "0804178429",
//     title: "Half the World (Shattered Sea)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51%2BsRzTLvdL.jpg",
//     price: 23.22,
//     category: "fantasy",
//   },
//   {
//     asin: "1477849319",
//     title: "Dryad-Born (Whispers from Mirrowen)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/51d8K9kFlDL.jpg",
//     price: 9.99,
//     category: "fantasy",
//   },
//   {
//     asin: "110196569X",
//     title:
//       "A Song of Ice and Fire 2017 Calendar: Illustrations by Didier Graffet",
//     img: "https://images-na.ssl-images-amazon.com/images/I/61Y%2B7CAHiCL.jpg",
//     price: 9.35,
//     category: "fantasy",
//   },
//   {
//     asin: "1598531646",
//     title: "Tarzan of the Apes: A Library of America Special Publication",
//     img: "https://images-na.ssl-images-amazon.com/images/I/615EQTEHR4L.jpg",
//     price: 13.26,
//     category: "fantasy",
//   },
//   {
//     asin: "125010310X",
//     title: "In the Still of the Night: The Supernaturals II",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91xB0qU71lL.jpg",
//     price: 23.68,
//     category: "fantasy",
//   },
//   {
//     asin: "1732665117",
//     title: "Caught by Demons: Laila of Midgard Book 1",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71NgUnGjkCL.jpg",
//     price: 12.37,
//     category: "fantasy",
//   },
//   {
//     asin: "178909061X",
//     title: "Venom: Lethal Protector Prose Novel",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91IXGJADw-L.jpg",
//     price: 7.19,
//     category: "fantasy",
//   },
//   {
//     asin: "0425262820",
//     title: "River of Dreams (A Novel of the Nine Kingdoms)",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91JJv0wvgqL.jpg",
//     price: 12.57,
//     category: "fantasy",
//   },
// ];

const EpicBooks = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://epibooks.onrender.com/fantasy");
        if (!response.ok) {
          throw new Error("Response Failed");
        }
        const jsonData = await response.json();
        setData(jsonData)
      } catch(err) {
        console.error(err)
      }
    }
    fetchData()
  }, []);
  return (
    <div className="d-flex flex-wrap justify-content-evenly gap-3">
      {data && data.map((book) => (
        <Card className={classes["card"]} key={book.asin}>
          <img src={book.img} alt="Book" />
          <h4>{book.title}</h4>
          <p>{book.category}</p>
          <p>{book.price}€</p>
        </Card>
      ))}
    </div>
  );
};

export default EpicBooks;
