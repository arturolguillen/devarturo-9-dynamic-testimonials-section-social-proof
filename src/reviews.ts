import { StaticImageData } from "next/image";
import EleanorVanceImages from "@/images/avatars/eleanor_vance.png";
import SophiaLaurentImage from "@/images/avatars/sophia_laurent.png";
import CamilleDupontImage from "@/images/avatars/camille_dupont.png";
import VictoriaSterlingImage from "@/images/avatars/victoria_sterling.png";
import HelenaRostovaImage from "@/images/avatars/helena_rostova.png";
import ClaraMontgomeryImage from "@/images/avatars/clara_montgomery.png";

export type Review = {
    id: number;
    name: string;
    text: string;
    rating: number;
    image: StaticImageData;
};

const reviews: Review[] = [
    {
        id: 1,
        name: 'Eleanor Vance',
        text: 'La consulta personalizada transformó por completo la textura de mi piel. Los aceites botánicos se sienten como pura seda y la atención al detalle es inigualable.',
        rating: 5,
        image: EleanorVanceImages,
    },
    {
        id: 2,
        name: 'Sophia Laurent',
        text: 'Un auténtico santuario de calma y sofisticación. El tratamiento a medida resolvió en solo dos semanas sensibilidades con las que había lidiado durante años.',
        rating: 5,
        image: SophiaLaurentImage,
    },
    {
        id: 3,
        name: 'Camille DuPont',
        text: 'La sesión de consulta fue una auténtica lección de autocuidado. Su orientación experta en bienestar holístico cambió toda mi rutina diaria para mejor.',
        rating: 5,
        image: CamilleDupontImage,
    },
    {
        id: 4,
        name: 'Victoria Sterling',
        text: 'Formulaciones exquisitas y resultados profundamente reparadores. Mi piel nunca lució tan luminosa y equilibrada.Vale cada instante.',
        rating: 5,
        image: VictoriaSterlingImage,
    },
    {
        id: 5,
        name: 'Helena Rostova',
        text: 'Una experiencia verdaderamente a medida de principio a fin. El diagnóstico identificó con precisión exacta lo que le faltaba a mi ritual de cuidado.',
        rating: 5,
        image: HelenaRostovaImage,
    },
    {
        id: 6,
        name: 'Clara Montgomery',
        text: 'El nivel de atención personalizada y la calidad de los ingredientes orgánicos es extraordinario. Aura & Essence es ya parte indispensable de mi estilo de vida.',
        rating: 5,
        image: ClaraMontgomeryImage,
    },
];

export default reviews;