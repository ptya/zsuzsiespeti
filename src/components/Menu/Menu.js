import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// local styles
import { MenuWrapper, Plant } from './Menu.styled'

const Menu = () => {
  const { plant } = useStaticQuery(graphql`
    query {
      plant: file(relativePath: { eq: "plant-small.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <MenuWrapper id="menu">
      <h2>Menü</h2>
      <h3>Leves</h3>
      <p>Tyúkhúsleves gazdagon</p>
      <h3>Tál</h3>
      <p>Kacsamell</p>
      <p>Csirkemell caprese (paradicsom, mozzarella, bazsalikom)</p>
      <p>Vadsült feketeribizlivel</p>
      <p>Sajttal, füstölt tarjával töltött sertésborda cornflakes bundában</p>
      <p>Rántott sajt és rántott gomba</p>
      <h3>Köret</h3>
      <p>Párolt káposzta, hagymás tepsis burgonya</p>
      <p>Rizibizi</p>
      <p>Grill zöldségek</p>
      <p>Burgonya fánk</p>
      <h3>Saláta</h3>
      <p>Káposzta saláta, csemege uborka, almapaprika</p>
      <p>Kevert saláta</p>
      <h3>Éjféli menü</h3>
      <p>Töltött káposzta</p>
      <p>Kenegetős</p>
      <h3>Ital (korlátlan)</h3>
      <p>Szénsavas üveges üdítők (Coca-Cola, Fanta, Sprite, Tonic stb.)</p>
      <p>Rostos levek (narancslé 100%, baracklé, alma, Ice Tea stb.)</p>
      <p>Limonádé</p>
      <p>Ásványvíz (szénsavmentes is)</p>
      <p>Szóda</p>
      <p>Bomba energiaital</p>
      <p>Tea</p>
      <p>Kávé</p>
      <br />
      <p>
        Sörök (Csapolt Gösser, Dreher, Edelweiss búza, Krusovice, Krusovice
        barna)
      </p>
      <p>Alkoholmentes sör (Heineken)</p>
      <br />
      <p>Finom folyó borok (vörös, fehér, rosé)</p>
      <p>Pezsgő (Törley)</p>
      <br />
      <p>Vodka (Finlandia)</p>
      <p>Gin (Beefeater)</p>
      <p>Baileys</p>
      <p>Johnnie Walker</p>
      <p>Jim Beam</p>
      <p>Ballantines</p>
      <p>Tequila</p>
      <p>Bacardi</p>
      <p>Captain Morgan Spiced Gold</p>
      <p>Jägermeister</p>
      <p>Unicum</p>
      <p>Martini</p>
      <p>Vilmoskörte pálinka</p>
      <p>Kosher szilvapálinka</p>
      <Plant fluid={plant.childImageSharp.fluid} alt="" />
    </MenuWrapper>
  )
}

export default Menu
