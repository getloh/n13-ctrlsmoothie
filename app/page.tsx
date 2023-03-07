import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import HomeScroller from './components/HomeScroller'
import IngredientTile from './components/IngredientTile'

const inter = Inter({ subsets: ['latin'] })

export default function Home()
{

  return (

    <main className="bg-ctrl1">
      <div>
        <HomeScroller />

        <section className="p-10 flex w-full bg-ctrl2 h-128 justify-center items-center">
          <div>
            <div className="w-1/3 border-2">IMAGE PLACEHOLDER</div>
          </div>
          <div className="w-1/3">
            <p>Stacked with protein, good fats and complex carbohydrates, this shake is the perfect healthy breakfast alternative to keep you full up till Lunchtime. <br></br><br></br></p>

            <p>It contains maca and cacao to help rid your body of pesky free radicals. To top it off, beetroot is packed with calcium, vitamin C, potassium and folic acid - a great way to kick-start the morning.</p>          </div>
        </section>

        <section className="w-full flex flex-wrap">
          <IngredientTile
            bgColor="bg-ctrl3"
            text="Stamina"
            subtext="In a beet"
          />
          <IngredientTile
            bgColor="bg-ctrl4"
            text="Manage weight"
            subtext="with almond milk"
          />
          <IngredientTile
            bgColor="bg-ctrl5"
            text="Antioxident"
            subtext="Boost with cacao"
          />
          <IngredientTile
            bgColor="bg-ctrl6"
            text="Metabolise"
            subtext="with vanilla pods"
          />
          <IngredientTile
            bgColor="bg-ctrl7"
            text="Boost energy"
            subtext="with maca"
          />
          <IngredientTile
            bgColor="bg-ctrl8"
            text="Alkalise"
            subtext="with sea salt"
          />

        </section>

      </div>
    </main>
  )
}
