import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import HomeScroller from './components/HomeScroller'
import IngredientTile from './components/IngredientTile'
import Button from './components/Button'
import BuyButton from './components/BuyButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home()
{

    return (

        <main className="bg-ctrl1">
            <div>
                <HomeScroller />

                <section className="py-10 px-2 xl:px-40 flex w-full bg-ctrl2 sm:h-128 justify-center items-center relative">
                    <Button
                        text="Order now"
                        class="px-2"
                        style={{ position: "absolute", top: 0, transform: "translateY(-50%)" }}
                    />
                    <BuyButton 
                        className="absolute right-0 top-1/4"
                    />
                    <div className="flex flex-col sm:flex-row justify-center">
                        <div className="aspect-square sm:w-1/2 md:w-1/3">
                            <Image
                                src="/takectrl.png"
                                height={600}
                                width={600}
                                alt="takeCtrl"
                            />
                        </div>
                        <div className="sm:aspect-square sm:w-1/2 p-2 md:w-1/3 flex flex-col justify-center">
                            <p>Stacked with protein, good fats and complex carbohydrates, this shake is the perfect healthy breakfast alternative to keep you full up till Lunchtime. <br></br><br></br></p>

                            <p>It contains maca and cacao to help rid your body of pesky free radicals. To top it off, beetroot is packed with calcium, vitamin C, potassium and folic acid - a great way to kick-start the morning.</p>
                        </div>
                    </div>
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

                <section className="py-10 px-16 xl:px-40 w-full bg-ctrl1 sm:h-128 justify-center items-center flex flex-col">
                    <div className="w-full h-full flex flex-col sm:flex-row items-center sm:items-start justify-between mb-8">
                        <div>
                            <h3 className="text-3xl font-bold">Nutrition info</h3>
                            <h5 className="text-lg">Ctrl - The Energy Shake</h5>
                        </div>
                        <div>
                            <table className="">
                                <thead>
                                    <tr className="border-b-2 border-ctrl6 h-10">
                                        <th className="w-30 text-left">Ctrl</th>
                                        <th className="w-20 text-right">100ml</th>
                                        <th className="w-20 text-right">330ml</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="">Energy</td>
                                        <td className="text-right">a2</td>
                                        <td className="text-right">a3</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="text-right">b2</td>
                                        <td className="text-right">b3</td>
                                    </tr>
                                    <tr>
                                        <td className="h-2"></td>
                                    </tr>
                                    <tr className="">
                                        <td className="">Protein</td>
                                        <td className="text-right">c2</td>
                                        <td className="text-right">c3</td>
                                    </tr>
                                    <tr>
                                        <td className="h-2"></td>
                                    </tr>
                                    <tr>
                                        <td className="">Carbohydrates</td>
                                        <td className="text-right">c2</td>
                                        <td className="text-right">c3</td>
                                    </tr>
                                    <tr>
                                        <td className="">of which is sugars</td>
                                        <td className="text-right">c2</td>
                                        <td className="text-right">c3</td>
                                    </tr>
                                    <tr>
                                        <td className="h-2"></td>
                                    </tr>
                                    <tr>
                                        <td className="">Fat</td>
                                        <td className="text-right">c2</td>
                                        <td className="text-right">c3</td>
                                    </tr>
                                    <tr>
                                        <td className="">of which is saturates</td>
                                        <td className="text-right">c2</td>
                                        <td className="text-right">c3</td>
                                    </tr>
                                    <tr>
                                        <td className="h-2"></td>
                                    </tr>
                                    <tr>
                                        <td className="">Fibre</td>
                                        <td className="text-right">c2</td>
                                        <td className="text-right">c3</td>
                                    </tr>
                                    <tr>
                                        <td className="h-2"></td>
                                    </tr>
                                    <tr>
                                        <td className="">Sodium</td>
                                        <td className="text-right">c2</td>
                                        <td className="text-right">c3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Button
                        text="Order now"
                        style={{}} />

                </section>
            </div>
        </main>
    )
}
