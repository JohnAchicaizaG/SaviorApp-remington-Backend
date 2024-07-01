import OpenAI from "openai"

interface Options {
    prompt: string
}


export const orthographyCheckUseCase = async (openai: OpenAI, options: Options) => {

    const { prompt } = options
    const prePromt = `Contexto:EstudioscomoFactoresderiesgoasociadosalsuicidioeintentodesuicidiootambiénlainvestigaciónrealizadaporelInstitutoNacionaldeSaludMental,Centroderecursosparalaprevencióndelsuicidioreferencianalgunosfactoresderiesgoasociadosasuicidiocomo:
    Trastornosmentales:Ladepresióneselprincipalfactorderiesgodesuicidio,presenteenaproximadamenteel90%deloscasos.Otrostrastornosmentalesasociadosalsuicidiosonlaansiedad,eltrastornoafectivobipolaryeltrastornolímitedelapersonalidad.Antecedentesfamiliaresdesuicidio: lamuertedeunfamiliarporsuicidioaumentaelriesgodesuicidioenaproximadamentedosotresveces.Exposiciónaeventostraumáticos: Haberexperimentadoeventostraumáticoscomoabusofísicoosexual,negligencia,olapérdidadeunserquerido.
    Problemasdesaludfísica: Algunasenfermedadescrónicas,comoelcáncerolasenfermedadescardiovasculares.Consumodesustancias: Elconsumodealcoholysustanciaspsicoactivaspuedeaumentarelriesgodesuicidio,tantoenpersonascontrastornosmentalescomoenpersonassinellos.Formulario:”1.¿Hacambiadosushábitosdesueñooalimentación?(Dormirmuchoopoco,comerenexcesoodejardecomer)”,”2.¿Hadescuidadosuhigienepersonalosuaparienciafísica?",”3.¿Haperdidointerésenactividadesqueantesdisfrutaba?",”4.¿Sehaaisladodeamigosyfamiliares?",”5.¿Hacomenzadoaconsumirdrogasoalcoholenexceso?",”6.¿Haexpresadosentimientosdedesesperanzaotristezaprofunda?",”7.¿Hahabladooescritosobrelamuerteoelsuicidio?",”8.¿Haregaladootiradopertenenciasimportantessinrazónaparente?",”9.¿Harealizadoplanesparasupropiofuneralomuerte?",”10.¿Sehamostradoirritableoagresivosinmotivoaparente?",”11.¿Hatenidopensamientosocomportamientosimpulsivosoautodestructivos?"RespuestasDepreguntas:Nunca=0,Raravez=1,Aveces=2,Frecuentemente=3,Siempre=4.Escala:0-10puntos:Depresiónmínima11-20puntos:Depresiónleve21-30puntos:DepresiónmoderadaΩ31-40puntos:Depresióngrave41-44puntos:DepresiónmuygraveComoresponder:Larespuestaqueledarástomaraseljsonyseraasi,ademasasociaraslasrespuestaPreguntaUnoalapregunta1.yasisucesivamenteymedevolveráslapuntuacióndeacuerdoasiescogieronenlaspreguntaUno=raravez:Quieromerespondasconjsonasi{nombres:PrimerNombre+SegundoNombre,diagnosticoIa:aquipondrasconlasescalas0a44puntosespecificandoquehacercomoejercicio,respiracionalgúnconsejorápidosilasescalassonmoderadasrecomendarasatenciónoiraunespecialista,mensaje:aquipondrásunbrevemensajealentadoraleatorio,Puntuacionlasumadelasrepuestasraravezyasicontodas},siempredevuelvemelamismaestructuradeJSON
    `;

    console.log("desde el PROMT: ", prompt)
    const completion = await openai.chat.completions.create({
       
        messages: [
            {
                role: "system",
                content: prePromt
            },
            {
                role: "user",
                content: JSON.stringify(prompt)
            }

        ],
        model: "gpt-3.5-turbo",
        temperature: 0.4,
        max_tokens: 150
    },
    );

    console.log(completion.choices[0]);
    return completion.choices[0].message.content;



}