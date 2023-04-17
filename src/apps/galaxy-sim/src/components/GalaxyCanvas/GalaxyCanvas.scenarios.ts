import { WindowDimensions, InitialStarType } from '../../types';
import p5 from 'p5'
import Star  from '../../simulation/Star'
import helper from './GalaxyCanvas.helper'

export function createRandomScenario(pfive: p5, types: InitialStarType, stars: Array<Star>) {
    let xMin = 250
    let xMax = 750
    let yMin = 250
    let yMax = 750

    console.log(`xMin: ${xMin} xMax: ${xMax}`)
    console.log(`yMin: ${xMin} yMax: ${xMax}`)
    for (let i = 0; i < types.redDwarfs; i++) {
        // Red Dwarf
        let x = helper.getRandomValue(xMax, xMin);
        let y = helper.getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, helper.getRandomValue(1, 100)));
    }
    for (let i = 0; i < types.yellows; i++) {
        // Yellow Stars
        let x = helper.getRandomValue(xMax, xMin);
        let y = helper.getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, helper.getRandomValue(101, 300)));
    }
    for (let i = 0; i < types.blues; i++) {
        // Red Giants
        let x = helper.getRandomValue(xMax, xMin);
        let y = helper.getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, helper.getRandomValue(301, 500)));
    }
    for (let i = 0; i < types.blueGiants; i++) {
        // Blue Giants
        let x = helper.getRandomValue(xMax, xMin);
        let y = helper.getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, helper.getRandomValue(501, 999)));
    }
    for (let i = 0; i < types.blackHoles; i++) {
        let x = helper.getRandomValue(xMax, xMin);
        let y = helper.getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, 1000, [0, 0]));
    }
}

export function createSimpleOrbit(pfive: p5, window: WindowDimensions, stars: Array<Star>) {
    let x = window.width;
    let y = window.height;

    console.log(`x: ${x} y: ${y}`)
    // yellow star in center of window
    stars.push(new Star(x * .50, y * .50, pfive, 100000, [0, 0]));

    // earth like planet in orbit
    stars.push(new Star(x * .50, y * .40, pfive, 100, [.85, 0]));
}

export function createEarthMoonSunOrbit(pfive: p5, window: WindowDimensions, stars: Array<Star>) {
    let x = window.width;
    let y = window.height;

    console.log(`x: ${x} y: ${y}`)
    // yellow star in center of window
    stars.push(new Star(x * .50, y * .50, pfive, 100000, [0, 0]));

    // earth like planet in orbit
    stars.push(new Star(x * .50, y * .30, pfive, 1000, [.85, 0]));

    // Moon in orbit
    stars.push(new Star(x * .51, y * .29, pfive, 1, [1.01, .1]));
}

export function createSolarSystem(pfive: p5, window: WindowDimensions, stars: Array<Star>) {
    let x = window.width;
    let y = window.height;

    console.log(`x: ${x} y: ${y}`)
    // yellow star in center of window
    stars.push(new Star(x * .50, y * .50, pfive, 100000, [-.025, 0]));

    // planets in orbit
    stars.push(new Star(x * .50, y * .15, pfive, 1000, [1.70, 0]));
    stars.push(new Star(x * .50, y * .20, pfive, 500, [1.60, 0]));
    stars.push(new Star(x * .50, y * .25, pfive, 250, [1.40, 0]));
    stars.push(new Star(x * .50, y * .29, pfive, 100, [1.31, 0]));
    stars.push(new Star(x * .50, y * .32, pfive, 50, [1.22, 0]));
    stars.push(new Star(x * .50, y * .35, pfive, 25, [1.12, 0]));
    stars.push(new Star(x * .50, y * .41, pfive, 10, [.86, 0]));
    stars.push(new Star(x * .50, y * .45, pfive, 9, [0.99, 0]));
    stars.push(new Star(x * .50, y * .48, pfive, 8, [1.6, 0]));
    console.log(`${x * .50} ${y * .48}`)
}

export function createSolarSystemCollision(pfive: p5, window: WindowDimensions, stars: Array<Star>) {
        let x = window.width;
    let y = window.height;

    console.log(`x: ${x} y: ${y}`)

            // yellow star
    stars.push(new Star(x * .05, y * .50, pfive, 5000, [0, .03]));

    // planets in orbit
    stars.push(new Star(x * .05, y * .467, pfive, 25, [.095, 0]));
    stars.push(new Star(x * .05, y * .475, pfive, 10, [.110, 0]));
    stars.push(new Star(x * .05, y * .480, pfive, 10, [.122, 0]));
    stars.push(new Star(x * .05, y * .485, pfive, 9, [.13, 0]));
    stars.push(new Star(x * .05, y * .495, pfive, 8, [.21, 0]));
    
    // yellow star
    stars.push(new Star(x * .25, y * .50, pfive, 5000, [-.01, 0]));

    // planets in orbit
    stars.push(new Star(x * .25, y * .467, pfive, 25, [.095, 0]));
    stars.push(new Star(x * .25, y * .475, pfive, 10, [.110, 0]));
    stars.push(new Star(x * .25, y * .480, pfive, 10, [.122, 0]));
    stars.push(new Star(x * .25, y * .485, pfive, 9, [.13, 0]));
    stars.push(new Star(x * .25, y * .495, pfive, 8, [.21, 0]));

    
    // yellow star
    stars.push(new Star(x * .45, y * .50, pfive, 5000, [-.01, 0]));

    // planets in orbit
    stars.push(new Star(x * .45, y * .467, pfive, 25, [.095, 0]));
    stars.push(new Star(x * .45, y * .475, pfive, 10, [.110, 0]));
    stars.push(new Star(x * .45, y * .480, pfive, 10, [.122, 0]));
    stars.push(new Star(x * .45, y * .485, pfive, 9, [.13, 0]));
    stars.push(new Star(x * .45, y * .495, pfive, 8, [.21, 0]));

    // yellow star
    stars.push(new Star(x * .65, y * .50, pfive, 5000, [0, -.03]));

    // planets in orbit
    stars.push(new Star(x * .65, y * .467, pfive, 25, [.095, 0]));
    stars.push(new Star(x * .65, y * .475, pfive, 10, [.110, 0]));
    stars.push(new Star(x * .65, y * .480, pfive, 10, [.122, 0]));
    stars.push(new Star(x * .65, y * .485, pfive, 9, [.13, 0]));
    stars.push(new Star(x * .65, y * .495, pfive, 8, [.21, 0]));



}

export function createGalaxy(pfive: p5, window: WindowDimensions, stars: Array<Star>) {
    let x = window.width;
    let y = window.height;

    console.log(`x: ${x} y: ${y}`)
    // yellow star in center of window
    stars.push(new Star(560, 608, pfive, 100000, [0,0]));

    // 1
    stars.push(new Star(570.3439353339854, 586.283852743102, pfive, helper.getRandomValue(1, 1000), [1.490997692692508, 0.5418672006014196]))
    stars.push(new Star(578.1811283940199, 591.5419827918961, pfive, helper.getRandomValue(1, 1000), [1.1444055093092933, 1.0958111834856552]))
    stars.push(new Star(582.6487527550759, 598.0712443042441, pfive, helper.getRandomValue(1, 1000), [0.7115456778246055, 1.4273054355016208]))
    stars.push(new Star(584.746043816385, 607.4240852621473, pfive, helper.getRandomValue(1, 1000), [0.07868798932699002, 1.618445189262356]))
    stars.push(new Star(582.8528967295591, 617.0157759043816, pfive, helper.getRandomValue(1, 1000), [-0.5960670584358181, 1.5460183995289458]))
    stars.push(new Star(578.2860860447328, 624.0041202433886, pfive, helper.getRandomValue(1, 1000), [-1.1144787502518554, 1.2733766274682128]))
    stars.push(new Star(569.8592184079222, 629.7971407568808, pfive, helper.getRandomValue(1, 1000), [-1.580444658455295, 0.7141035498728946]))
    stars.push(new Star(561.3286037230822, 631.5893844546081, pfive, helper.getRandomValue(1, 1000), [-1.7602984330499263, 0.10981945213113867]))
    stars.push(new Star(550.9454050960605, 629.5412199658965, pfive, helper.getRandomValue(1, 1000), [-1.659132635874717, -0.659796590087997]))
    stars.push(new Star(542.3947525566357, 623.2019854828854, pfive, helper.getRandomValue(1, 1000), [-1.2147024486249516, -1.3112987964567495]))
    stars.push(new Star(537.9621866842436, 615.5410423658765, pfive, helper.getRandomValue(1, 1000), [-0.6507588633109261, -1.6494143769776495]))
    stars.push(new Star(536.734186262366, 605.1659249251891, pfive, helper.getRandomValue(1, 1000), [0.11654298679049607, -1.7364093950366812]))
    stars.push(new Star(539.963655346772, 595.4742025608591, pfive, helper.getRandomValue(1, 1000), [0.8200441226585082, -1.4863425088633493]))
    stars.push(new Star(545.454816501243, 589.206080033211, pfive, helper.getRandomValue(1, 1000), [1.2621033598806741, -1.0791895369370568]))
    stars.push(new Star(554.193129761987, 584.8801307788998, pfive, helper.getRandomValue(1, 1000), [1.5572812802437344, -0.45140307063935714]))
    stars.push(new Star(562.1633594997646, 584.3052338699571, pfive, helper.getRandomValue(1, 1000), [1.5933184337562496, 0.10908116829171738]))

    // 2
    stars.push(new Star(575.6829913508096, 549.9657587859999, pfive, helper.getRandomValue(1, 1000), [0.9587416293057891, 0.24762104382615596]))
    stars.push(new Star(589.3699035116447, 555.7101285151103, pfive, helper.getRandomValue(1, 1000), [0.8620270050718228, 0.4978888696568278]))
    stars.push(new Star(601.1078077020999, 564.9895366036134, pfive, helper.getRandomValue(1, 1000), [0.7038244460595029, 0.71855021227127]))
    stars.push(new Star(610.0228657151696, 577.2448868490156, pfive, helper.getRandomValue(1, 1000), [0.4906362840079347, 0.8952285691917831]))
    stars.push(new Star(615.363814924672, 591.702158566723, pfive, helper.getRandomValue(1, 1000), [0.23223144473771645, 1.0137002756325095]))
    stars.push(new Star(616.5584072040058, 607.3796803477316, pfive, helper.getRandomValue(1, 1000), [-0.05740946005133386, 1.0606247360377201]))
    stars.push(new Star(613.2838154486545, 623.1125425195357, pfive, helper.getRandomValue(1, 1000), [-0.35923865717045367, 1.0250816787524955]))
    stars.push(new Star(605.5456241092458, 637.6075643426183, pfive, helper.getRandomValue(1, 1000), [-0.6489228504592182, 0.9010490013237373]))
    stars.push(new Star(593.7501176418107, 649.5419003848677, pfive, helper.getRandomValue(1, 1000), [-0.8979868700158006, 0.6906033890075574]))
    stars.push(new Star(578.7430437399478, 657.7088820527898, pfive, helper.getRandomValue(1, 1000), [-1.0771325009833288, 0.4068056758634149]))
    stars.push(new Star(561.7797255734629, 661.1951009803964, pfive, helper.getRandomValue(1, 1000), [-1.1617617911929954, 0.0748389966033466]))
    stars.push(new Star(544.4046864214184, 659.5488099461268, pfive, helper.getRandomValue(1, 1000), [-1.1381539863943089, -0.2703047802182911]))
    stars.push(new Star(528.2494359456167, 652.8821851686781, pfive, helper.getRandomValue(1, 1000), [-1.0078391377320963, -0.589928987776542]))
    stars.push(new Star(514.796548293619, 641.8638473750316, pfive, helper.getRandomValue(1, 1000), [-0.7877335305846079, -0.8495516588378774]))
    stars.push(new Star(505.17915101094815, 627.6000876059289, pfive, helper.getRandomValue(1, 1000), [-0.505767463998553, -1.0253835618136635]))
    stars.push(new Star(500.06846241321153, 611.447894531368, pfive, helper.getRandomValue(1, 1000), [-0.19416611907961928, -1.1069812756090127]))
    stars.push(new Star(499.66034572200374, 594.8207857668039, pfive, helper.getRandomValue(1, 1000), [0.11662659350960382, -1.0959783968104575]))
    stars.push(new Star(503.735149803101, 579.0347656991946, pfive, helper.getRandomValue(1, 1000), [0.4016988076562996, -1.0025147397893583]))
    stars.push(new Star(511.75357675406616, 565.2115835062215, pfive, helper.getRandomValue(1, 1000), [0.6429017535576534, -0.8414585049162348]))
    stars.push(new Star(522.9548607825171, 554.2329006286029, pfive, helper.getRandomValue(1, 1000), [0.8282667041520266, -0.6294404588188437]))

    // 3
    stars.push(new Star(570.4482243200355, 499.7407932621042, pfive, helper.getRandomValue(1, 1000), [0.8570568844896725, 0.06556279061881094]))
    stars.push(new Star(579.8253464007848, 500.8921985171643, pfive, helper.getRandomValue(1, 1000), [0.8476680140897527, 0.13713813101660782]))
    stars.push(new Star(589.0609354145552, 502.8247222697659, pfive, helper.getRandomValue(1, 1000), [0.8319207525171941, 0.2075934127689276]))
    stars.push(new Star(598.0858575711623, 505.5227077822831, pfive, helper.getRandomValue(1, 1000), [0.8099580778694965, 0.27637512314752366]))
    stars.push(new Star(606.8328711623004, 508.9645252670038, pfive, helper.getRandomValue(1, 1000), [0.7819756842251203, 0.3429500718826742]))
    stars.push(new Star(614.4889661028775, 512.7160200797897, pfive, helper.getRandomValue(1, 1000), [0.7515183556077218, 0.40113038298783427]))
    stars.push(new Star(622.5279916460985, 517.4973991175259, pfive, helper.getRandomValue(1, 1000), [0.7127604262695918, 0.4621093000360349]))
    stars.push(new Star(630.1092351701785, 522.9283657477615, pfive, helper.getRandomValue(1, 1000), [0.6688137870909098, 0.5194933077813263]))
    stars.push(new Star(637.1777516776731, 528.9668899256379, pfive, helper.getRandomValue(1, 1000), [0.6200385180427574, 0.5728738712975411]))
    stars.push(new Star(643.6827511408226, 535.5666730336364, pfive, helper.getRandomValue(1, 1000), [0.5668266392159235, 0.6218798344762185]))
    stars.push(new Star(649.5779169663374, 542.6775637541921, pfive, helper.getRandomValue(1, 1000), [0.5095957387935046, 0.666178987007693]))
    stars.push(new Star(654.3728593306347, 549.5405297197121, pfive, helper.getRandomValue(1, 1000), [0.45444676338358614, 0.7021220747088583]))
    stars.push(new Star(658.9923800582287, 557.4759822395746, pfive, helper.getRandomValue(1, 1000), [0.39076893085588477, 0.7366646690795737]))
    stars.push(new Star(662.8947813465214, 565.7589443217325, pfive, helper.getRandomValue(1, 1000), [0.32438522130416864, 0.7657680073270683]))
    stars.push(new Star(666.0531411936532, 574.3284999622499, pfive, helper.getRandomValue(1, 1000), [0.2557706039108491, 0.7892572402029757]))
    stars.push(new Star(668.4458035195804, 583.1220393965664, pfive, helper.getRandomValue(1, 1000), [0.18540650124976826, 0.8069956400757666]))
    stars.push(new Star(670.0564334214218, 592.0756730695975, pfive, helper.getRandomValue(1, 1000), [0.11377823844823627, 0.8188837206403707]))
    stars.push(new Star(670.8326716664936, 600.2997776845984, pfive, helper.getRandomValue(1, 1000), [0.04797390814388997, 0.8245605326622449]))
    stars.push(new Star(670.9243254822816, 609.378790478783, pfive, helper.getRandomValue(1, 1000), [-0.024716355052518686, 0.8251343210217725]))
    stars.push(new Star(670.2168602101377, 618.428475110563, pfive, helper.getRandomValue(1, 1000), [-0.09725410673917918, 0.8197711331186003]))
    stars.push(new Star(668.7148512016064, 627.3837143463574, pfive, helper.getRandomValue(1, 1000), [-0.16915727489850055, 0.8085076777339478]))
    stars.push(new Star(666.4281502521495, 636.1799964961111, pfive, helper.getRandomValue(1, 1000), [-0.23994786588290645, 0.7914142091131616]))
    stars.push(new Star(663.3718382922453, 644.7537819015438, pfive, helper.getRandomValue(1, 1000), [-0.30915304352912043, 0.768594139144513]))
    stars.push(new Star(659.9424646585547, 652.3026821088529, pfive, helper.getRandomValue(1, 1000), [-0.3702987660877321, 0.7429933190329668]))
    stars.push(new Star(655.4773823065207, 660.280387508772, pfive, helper.getRandomValue(1, 1000), [-0.43518976946368587, 0.7096467018916911]))
    stars.push(new Star(650.3155995342229, 667.8596526937393, pfive, helper.getRandomValue(1, 1000), [-0.49716353211001146, 0.6710616611357784]))
    stars.push(new Star(644.4918369821015, 674.9842243671147, pfive, helper.getRandomValue(1, 1000), [-0.5557836734600377, 0.6274714614125254]))
    stars.push(new Star(638.0455312819502, 681.600620068294, pfive, helper.getRandomValue(1, 1000), [-0.6106277121655406, 0.5791440305563119]))
    stars.push(new Star(631.0206818318545, 687.6585211892219, pfive, helper.getRandomValue(1, 1000), [-0.6612879562515394, 0.5263829935137683]))
    stars.push(new Star(624.1730283560747, 692.641622685562, pfive, helper.getRandomValue(1, 1000), [-0.7033865387801534, 0.47485368941983735]))
    stars.push(new Star(616.1814455472661, 697.5066887590692, pfive, helper.getRandomValue(1, 1000), [-0.7450058666302666, 0.41459274903852694]))
    stars.push(new Star(607.763200108191, 701.6883580089037, pfive, helper.getRandomValue(1, 1000), [-0.7813842971797461, 0.3509743750708186]))
    stars.push(new Star(598.9778254918012, 705.152287902731, pfive, helper.getRandomValue(1, 1000), [-0.8122128151300592, 0.28443504946381726]))
    stars.push(new Star(589.8880504628695, 707.8691292110813, pfive, helper.getRandomValue(1, 1000), [-0.837217057046468, 0.21544296639793498]))
    stars.push(new Star(580.5593907210069, 709.8148619658637, pfive, helper.getRandomValue(1, 1000), [-0.8561618724413799, 0.14449577480133838]))
    stars.push(new Star(571.9285456476712, 710.8989821208418, pfive, helper.getRandomValue(1, 1000), [-0.8679643780391935, 0.0787416474168678]))
    stars.push(new Star(562.3337654811654, 711.3264943543628, pfive, helper.getRandomValue(1, 1000), [-0.8748505036852845, 0.00553453515578864]))
    stars.push(new Star(552.7020515416133, 710.9459821475643, pfive, helper.getRandomValue(1, 1000), [-0.875257019682438, -0.06804356011935514]))
    stars.push(new Star(543.1049848659167, 709.7568120378365, pfive, helper.getRandomValue(1, 1000), [-0.8691416495338671, -0.1414172200334318]))
    stars.push(new Star(533.6142667383627, 707.7647137436402, pfive, helper.getRandomValue(1, 1000), [-0.8565197842819725, -0.21400556310196733]))
    stars.push(new Star(524.3010776893306, 704.9818172017254, pfive, helper.getRandomValue(1, 1000), [-0.8374655351548485, -0.2852272812186744]))
    stars.push(new Star(516.0475406462714, 701.7811164253692, pfive, helper.getRandomValue(1, 1000), [-0.8146725720790219, -0.34830537009378415]))
    stars.push(new Star(507.266166465028, 697.5450896831604, pfive, helper.getRandomValue(1, 1000), [-0.7837569423529371, -0.41533736894964945]))
    stars.push(new Star(498.86042128457814, 692.5891617424707, pfive, helper.getRandomValue(1, 1000), [-0.746955985304753, -0.47938120917684585]))
    stars.push(new Star(490.8933201577674, 686.9492921010379, pfive, helper.getRandomValue(1, 1000), [-0.7045645188940471, -0.5399269300643473]))
    stars.push(new Star(483.424336331047, 680.6668457770376, pfive, helper.getRandomValue(1, 1000), [-0.6569271654684176, -0.5964988338598907]))
    stars.push(new Star(476.5088677387357, 673.7882029558501, pfive, helper.getRandomValue(1, 1000), [-0.6044346343979364, -0.6486583929874234]))
    stars.push(new Star(470.74530105993244, 667.0603158760696, pfive, helper.getRandomValue(1, 1000), [-0.5528600690010138, -0.6919154449196496]))
    stars.push(new Star(465.02369410850343, 659.1883374322034, pfive, helper.getRandomValue(1, 1000), [-0.4923127298098483, -0.7346000936619479]))
    stars.push(new Star(459.989718453709, 650.8791089400394, pfive, helper.getRandomValue(1, 1000), [-0.4282387936139476, -0.7718627738567725]))
    stars.push(new Star(455.6791504517934, 642.1938215946036, pfive, helper.getRandomValue(1, 1000), [-0.3611436672867297, -0.8034528492708088]))
    stars.push(new Star(452.1221123255065, 633.1961227390992, pfive, helper.getRandomValue(1, 1000), [-0.2915476322583932, -0.8291697364121062]))
    stars.push(new Star(449.34294415551574, 623.9515699982859, pfive, helper.getRandomValue(1, 1000), [-0.2199799205899709, -0.8488620505653576]))
    stars.push(new Star(447.5071134093076, 615.389522973839, pfive, helper.getRandomValue(1, 1000), [-0.15365530989432552, -0.861448436608238]))
    stars.push(new Star(446.2594087194396, 605.8602949242058, pfive, helper.getRandomValue(1, 1000), [-0.07979980135152104, -0.8693920600008599]))
    stars.push(new Star(445.82716704051546, 596.280874229262, pfive, helper.getRandomValue(1, 1000), [-0.005515061157688584, -0.8711385805327235]))
    stars.push(new Star(446.2119887892372, 586.7193109429236, pfive, helper.getRandomValue(1, 1000), [0.06868070683293635, -0.8667139964201844]))
    stars.push(new Star(447.40984625816935, 577.2431247249143, pfive, helper.getRandomValue(1, 1000), [0.14228090821514558, -0.8561845818238686]))
    stars.push(new Star(449.41120872122565, 567.9188793729047, pfive, helper.getRandomValue(1, 1000), [0.21479103536341385, -0.839654047833853]))
    stars.push(new Star(451.9154603306237, 559.6290468818408, pfive, helper.getRandomValue(1, 1000), [0.2793591805763238, -0.8195347692002901]))
    stars.push(new Star(455.4050866169342, 550.7745084829503, pfive, helper.getRandomValue(1, 1000), [0.3484686595513108, -0.791960188089655]))
    stars.push(new Star(459.64066924651246, 542.2565365007089, pfive, helper.getRandomValue(1, 1000), [0.41513693317365613, -0.7588770936046457]))
    stars.push(new Star(464.5927579982593, 534.1343775344817, pfive, helper.getRandomValue(1, 1000), [0.4789339647169622, -0.720514291416653]))
    stars.push(new Star(470.22728513926893, 526.4645942115098, pfive, helper.getRandomValue(1, 1000), [0.5394485584338908, -0.6771284090890937]))
    stars.push(new Star(476.50576610090206, 519.3007556740403, pfive, helper.getRandomValue(1, 1000), [0.5962871914233305, -0.629004324416865]))
    stars.push(new Star(482.7364333075993, 513.2695969231359, pfive, helper.getRandomValue(1, 1000), [0.6444552180751931, -0.5814037063169166]))
    stars.push(new Star(490.1224021777573, 507.2082949571245, pfive, helper.getRandomValue(1, 1000), [0.6932615088645787, -0.5251153269214361]))
    stars.push(new Star(498.01734952338904, 501.78910462880907, pfive, helper.getRandomValue(1, 1000), [0.7373711903363009, -0.4650597880995769]))
    stars.push(new Star(506.3677568437492, 497.05119330672136, pfive, helper.getRandomValue(1, 1000), [0.7764787149524862, -0.40161928931097285]))
    stars.push(new Star(515.1168967091102, 493.0293816072619, pfive, helper.getRandomValue(1, 1000), [0.8103041507030602, -0.33519968811873513]))
    stars.push(new Star(524.2051260985982, 489.7538872308594, pfive, helper.getRandomValue(1, 1000), [0.8385951863171099, -0.2662298152065593]))
    stars.push(new Star(532.7090753052265, 487.44523785451025, pfive, helper.getRandomValue(1, 1000), [0.8593241796517486, -0.201695825016799]))
    stars.push(new Star(542.2699268710395, 485.66070122265756, pfive, helper.getRandomValue(1, 1000), [0.876460366693169, -0.12912627163081117]))
    stars.push(new Star(551.9828775597421, 484.6819670860218, pfive, helper.getRandomValue(1, 1000), [0.8875088881432078, -0.05537646500269969]))
    stars.push(new Star(561.780205791645, 484.5189779494836, pfive, helper.getRandomValue(1, 1000), [0.8923495929450928, 0.019044788740761574]))

    // 4
    stars.push(new Star(582.2327515668768, 427.4168340304777, pfive, helper.getRandomValue(1, 1000), [1.112916469291408, 0.11743538178359464]))
    stars.push(new Star(618.274506906847, 434.89241934551796, pfive, helper.getRandomValue(1, 1000), [1.0655693296168884, 0.32763283169997093]))
    stars.push(new Star(652.9984546589012, 449.6174857935658, pfive, helper.getRandomValue(1, 1000), [0.9726066131924809, 0.5293556352580845]))
    stars.push(new Star(683.002608552224, 470.1019035723775, pfive, helper.getRandomValue(1, 1000), [0.8438593090180625, 0.7025603896475411]))
    stars.push(new Star(708.1942629692963, 495.82572793861084, pfive, helper.getRandomValue(1, 1000), [0.6829708197698897, 0.8467870733504496]))
    stars.push(new Star(728.1165072007828, 526.70037160805, pfive, helper.getRandomValue(1, 1000), [0.49075459325990983, 0.9596345624440388]))
    stars.push(new Star(740.8705363395435, 559.6849794455757, pfive, helper.getRandomValue(1, 1000), [0.2860985102783805, 1.0307488360228048]))
    stars.push(new Star(746.6785726798372, 594.3398069384182, pfive, helper.getRandomValue(1, 1000), [0.07138097737009189, 1.0618272678918619]))
    stars.push(new Star(745.1882847335578, 630.3771290862355, pfive, helper.getRandomValue(1, 1000), [-0.15217375453294718, 1.0511048944970989]))
    stars.push(new Star(736.5475569259834, 664.2982479866131, pfive, helper.getRandomValue(1, 1000), [-0.36353476889814135, 0.9996472282343687]))
    stars.push(new Star(721.1348316715564, 695.8555536195225, pfive, helper.getRandomValue(1, 1000), [-0.5617615099327384, 0.9093894433035287]))
    stars.push(new Star(698.7633219705644, 724.592182061328, pfive, helper.getRandomValue(1, 1000), [-0.7445848829663987, 0.7788119053551588]))
    stars.push(new Star(671.5640879539395, 747.6700998335541, pfive, helper.getRandomValue(1, 1000), [-0.8941997026192506, 0.6197914495528923]))
    stars.push(new Star(639.9849403663956, 765.0359625572464, pfive, helper.getRandomValue(1, 1000), [-1.0100833856979738, 0.43443966619707125]))
    stars.push(new Star(604.1438170833558, 776.1551587434714, pfive, helper.getRandomValue(1, 1000), [-1.0885936165370083, 0.22307789529271088]))
    stars.push(new Star(567.546110454299, 779.8515668114519, pfive, helper.getRandomValue(1, 1000), [-1.121040475476784, 0.006354813286624054]))
    stars.push(new Star(530.6450130240909, 776.331017718575, pfive, helper.getRandomValue(1, 1000), [-1.1081566555355995, -0.21268348829877518]))
    stars.push(new Star(493.8965187543366, 765.247705343447, pfive, helper.getRandomValue(1, 1000), [-1.0474077928035563, -0.43071568021901346]))
    stars.push(new Star(460.9651150017788, 747.6680069896113, pfive, helper.getRandomValue(1, 1000), [-0.9446871492558728, -0.6252563648472999]))
    stars.push(new Star(432.0941249443475, 724.0805448650779, pfive, helper.getRandomValue(1, 1000), [-0.803414767676592, -0.7942622925582618]))
    stars.push(new Star(407.8270056034361, 694.5210776135905, pfive, helper.getRandomValue(1, 1000), [-0.6243212638790135, -0.9340741226755983]))
    stars.push(new Star(390.5425390556762, 661.9388261842422, pfive, helper.getRandomValue(1, 1000), [-0.4259121067671814, -1.0309549117537564]))
    stars.push(new Star(380.0948407702984, 626.86122504538, pfive, helper.getRandomValue(1, 1000), [-0.2118960809098385, -1.0861715986279934]))
    stars.push(new Star(376.8661725336365, 589.5951524057768, pfive, helper.getRandomValue(1, 1000), [0.015708041103677354, -1.0979521077886691]))
    stars.push(new Star(381.1252719585786, 553.7918821263296, pfive, helper.getRandomValue(1, 1000), [0.2347783383617245, -1.0658868466125566]))
    stars.push(new Star(392.46607787743034, 519.7517105898723, pfive, helper.getRandomValue(1, 1000), [0.443913292994341, -0.992746307869195]))
    stars.push(new Star(411.0739017766348, 487.90446370274344, pfive, helper.getRandomValue(1, 1000), [0.6411592389226939, -0.8776188270353442]))
    stars.push(new Star(435.1441394615102, 461.34085762568503, pfive, helper.getRandomValue(1, 1000), [0.8080237670006907, -0.7314868710460761]))
    stars.push(new Star(464.2221319220508, 440.103397056218, pfive, helper.getRandomValue(1, 1000), [0.9446491377276154, -0.5566199649359733]))
    stars.push(new Star(498.26865193394906, 424.6876427072122, pfive, helper.getRandomValue(1, 1000), [1.0483694977760856, -0.3527723809187389]))
    stars.push(new Star(534.0061872676512, 416.6469946971828, pfive, helper.getRandomValue(1, 1000), [1.1088199299750816, -0.13904972216039027]))

    // 5
    stars.push(new Star(599.8354209709005, 392.9939461003891, pfive, helper.getRandomValue(1, 1000), [1.2014246624902065, 0.2015925933636601]))
    stars.push(new Star(636.3064639859741, 402.39089126170165, pfive, helper.getRandomValue(1, 1000), [1.1475247075146175, 0.3967881448599343]))
    stars.push(new Star(670.5651745061275, 417.65554363227756, pfive, helper.getRandomValue(1, 1000), [1.060178902910038, 0.5795955796881552]))
    stars.push(new Star(701.6193028599847, 438.3151108065732, pfive, helper.getRandomValue(1, 1000), [0.9423308233989853, 0.7445723953560327]))
    stars.push(new Star(729.3751591013316, 464.6305362278651, pfive, helper.getRandomValue(1, 1000), [0.7927440422488351, 0.8911772736276262]))
    stars.push(new Star(751.3231599033403, 494.171391056637, pfive, helper.getRandomValue(1, 1000), [0.6253878974587089, 1.0062796664357048]))
    stars.push(new Star(767.7967562646205, 526.8149305383284, pfive, helper.getRandomValue(1, 1000), [0.4409633809065022, 1.0918817315699714]))
    stars.push(new Star(778.3503928325339, 561.6109615691912, pfive, helper.getRandomValue(1, 1000), [0.24472733057185464, 1.145892651519879]))
    stars.push(new Star(782.7396797952879, 598.7252962900216, pfive, helper.getRandomValue(1, 1000), [0.03550404611973401, 1.167195942329709]))
    stars.push(new Star(780.5787253005494, 634.7833416121614, pfive, helper.getRandomValue(1, 1000), [-0.16803134079944537, 1.1540202583062498]))
    stars.push(new Star(772.1685130452111, 669.9042570171588, pfive, helper.getRandomValue(1, 1000), [-0.36692797444912323, 1.1079199004749152]))
    stars.push(new Star(757.7382781006613, 703.0831443053393, pfive, helper.getRandomValue(1, 1000), [-0.5558669178840028, 1.0300008562624365]))
    stars.push(new Star(736.9447388224497, 734.2795468203897, pfive, helper.getRandomValue(1, 1000), [-0.7349905261618518, 0.9181683002343629]))
    stars.push(new Star(711.6527781125698, 760.6321875876879, pfive, helper.getRandomValue(1, 1000), [-0.8880583671279941, 0.7821161994019374]))
    stars.push(new Star(682.0004278535345, 782.3762941479177, pfive, helper.getRandomValue(1, 1000), [-1.0163806588741902, 0.6222482585863933]))
    stars.push(new Star(648.8214437667398, 798.8390121883754, pfive, helper.getRandomValue(1, 1000), [-1.115883655598004, 0.4427806749189744]))
    stars.push(new Star(611.881065007794, 809.7327691966261, pfive, helper.getRandomValue(1, 1000), [-1.1847533596832673, 0.2422501594529248]))
    stars.push(new Star(574.5602128865264, 814.0055882534167, pfive, helper.getRandomValue(1, 1000), [-1.2160710892973379, 0.03901633468357222]))
    stars.push(new Star(536.8476009107276, 811.9207981516578, pfive, helper.getRandomValue(1, 1000), [-1.2110525374722798, -0.16676774703844968]))
    stars.push(new Star(499.8770052208729, 803.5032309295455, pfive, helper.getRandomValue(1, 1000), [-1.1694454309816877, -0.3685814085543919]))
    stars.push(new Star(463.67980784246635, 788.4151254248094, pfive, helper.getRandomValue(1, 1000), [-1.0892596955435463, -0.5658114897879707]))
    stars.push(new Star(431.6121723681765, 768.0408537850029, pfive, helper.getRandomValue(1, 1000), [-0.97797721903326, -0.7397390577450527]))
    stars.push(new Star(403.4755571828325, 742.6217928290492, pfive, helper.getRandomValue(1, 1000), [-0.8372904451030296, -0.8911448181016189]))
    stars.push(new Star(380.1094865206422, 712.9339132701047, pfive, helper.getRandomValue(1, 1000), [-0.6718425674733248, -1.0153263267603228]))
    stars.push(new Star(361.7160979357509, 678.7712236671828, pfive, helper.getRandomValue(1, 1000), [-0.4808026570092741, -1.1111060121368628]))
    stars.push(new Star(349.96343040408163, 643.2969846918573, pfive, helper.getRandomValue(1, 1000), [-0.2821258887859903, -1.1699454660430857]))
    stars.push(new Star(344.5017711380905, 606.5529533521728, pfive, helper.getRandomValue(1, 1000), [-0.07617771906299342, -1.1940186197787617]))
    stars.push(new Star(345.4597423588538, 569.6238549917005, pfive, helper.getRandomValue(1, 1000), [0.13101127742794189, -1.1830538394269718]))
    stars.push(new Star(353.12167602288775, 532.4514246690545, pfive, helper.getRandomValue(1, 1000), [0.33999406678708666, -1.1357240776195994]))
    stars.push(new Star(366.76744646229133, 498.42832576759355, pfive, helper.getRandomValue(1, 1000), [0.5320252246652623, -1.0565887812262078]))
    stars.push(new Star(386.13150796749204, 467.35188984424616, pfive, helper.getRandomValue(1, 1000), [0.7085920396791308, -0.9470439358009817]))
    stars.push(new Star(410.6578090741736, 440.1183587937143, pfive, helper.getRandomValue(1, 1000), [0.8649767003095498, -0.8100974293978078]))
    stars.push(new Star(440.6522817141846, 416.8767761670713, pfive, helper.getRandomValue(1, 1000), [1.0007437034406457, -0.6438477621349649]))
    stars.push(new Star(473.3982882375541, 399.76644490949127, pfive, helper.getRandomValue(1, 1000), [1.1036031850583767, -0.46302949386165726]))
    stars.push(new Star(508.83860604108907, 388.5082710324184, pfive, helper.getRandomValue(1, 1000), [1.1751225627332282, -0.26760384989835156]))
    stars.push(new Star(545.9616645895256, 383.4712945093933, pfive, helper.getRandomValue(1, 1000), [1.2129241509952084, -0.06288685724192897]))

    // 6
    stars.push(new Star(600.1444006982223, 356.08682765118454, pfive, helper.getRandomValue(1, 1000), [1.2949550715413247, 0.19075407615599005]))
    stars.push(new Star(638.3593255080172, 364.8123399280229, pfive, helper.getRandomValue(1, 1000), [1.2491962389908737, 0.38333330009813904]))
    stars.push(new Star(674.7402879471181, 379.179702603949, pfive, helper.getRandomValue(1, 1000), [1.1739405797292932, 0.5664316660182616]))
    stars.push(new Star(708.4309791857289, 398.8353460480813, pfive, helper.getRandomValue(1, 1000), [1.0711465778904334, 0.7356466052771937]))
    stars.push(new Star(738.6442962500437, 423.29980647446774, pfive, helper.getRandomValue(1, 1000), [0.9434319349171424, 0.8869912518067217]))
    stars.push(new Star(764.6806092940898, 451.98167561658624, pfive, helper.getRandomValue(1, 1000), [0.7939743985013056, 1.0169853225813943]))
    stars.push(new Star(785.9429025710645, 484.19384060207955, pfive, helper.getRandomValue(1, 1000), [0.626404050494479, 1.1227183012994644]))
    stars.push(new Star(801.9486810394648, 519.1712330482854, pfive, helper.getRandomValue(1, 1000), [0.4446964361361289, 1.2018878172467822]))
    stars.push(new Star(812.3387447749211, 556.0894031707138, pfive, helper.getRandomValue(1, 1000), [0.2530715787690685, 1.2528183567704492]))
    stars.push(new Star(816.8830788255951, 594.0834142239944, pfive, helper.getRandomValue(1, 1000), [0.05590217093253246, 1.274465167626447]))
    stars.push(new Star(815.4841404005352, 632.2667178457672, pfive, helper.getRandomValue(1, 1000), [-0.14236825188315366, 1.2664099426651294]))
    stars.push(new Star(808.1778170526442, 669.7498107148483, pfive, helper.getRandomValue(1, 1000), [-0.33729950544351955, 1.2288519242389444]))
    stars.push(new Star(795.1322529430911, 705.658604273067, pfive, helper.getRandomValue(1, 1000), [-0.5245238135788636, 1.1625975359705112]))
    stars.push(new Star(776.6445882890334, 739.1524901465441, pfive, helper.getRandomValue(1, 1000), [-0.6998155925950283, 1.0690504731764778]))
    stars.push(new Star(753.1356996817246, 769.4420524651007, pfive, helper.getRandomValue(1, 1000), [-0.859155765709454, 0.9501984029952544]))
    stars.push(new Star(725.1428618258216, 795.8063870131525, pfive, helper.getRandomValue(1, 1000), [-0.9988074809052765, 0.8085991374185489]))
    stars.push(new Star(693.3100140660331, 817.6098893760382, pfive, helper.getRandomValue(1, 1000), [-1.1153985796582528, 0.6473587449402134]))
    stars.push(new Star(658.3754685569211, 834.318199128302, pfive, helper.getRandomValue(1, 1000), [-1.206010012319671, 0.47009658263214477]))
    stars.push(new Star(621.156871129265, 845.5128433703921, pfive, helper.getRandomValue(1, 1000), [-1.2682692331002265, 0.28089318426603793]))
    stars.push(new Star(582.5333607152613, 850.9039646041896, pfive, helper.getRandomValue(1, 1000), [-1.3004429731336402, 0.08421503691084886]))
    stars.push(new Star(543.4250641243731, 850.3404057682563, pfive, helper.getRandomValue(1, 1000), [-1.3015206723822408, -0.11518619369212775]))
    stars.push(new Star(504.7703296206667, 843.8163743932504, pfive, helper.getRandomValue(1, 1000), [-1.2712806473142282, -0.3123993185192741]))
    stars.push(new Star(467.5013894192511, 831.4740005162313, pfive, helper.getRandomValue(1, 1000), [-1.2103286465969842, -0.5025001036513734]))
    stars.push(new Star(432.51938224312585, 813.6012982455392, pfive, helper.getRandomValue(1, 1000), [-1.120101436824573, -0.6807091585779418]))
    stars.push(new Star(400.6698658380867, 790.6253429584098, pfive, helper.getRandomValue(1, 1000), [-1.0028319782125243, -0.8425506596137824]))
    stars.push(new Star(372.719981960678, 763.1008520470943, pfive, helper.getRandomValue(1, 1000), [-0.861475993722587, -0.9839988372710922]))
    stars.push(new Star(349.33832621299064, 731.6947041577257, pfive, helper.getRandomValue(1, 1000), [-0.6996070514790858, -1.1016009315771453]))
    stars.push(new Star(331.07835046943757, 697.167237073141, pfive, helper.getRandomValue(1, 1000), [-0.5212891078646609, -1.192569340403968]))
    stars.push(new Star(318.36578543699756, 660.3513264436086, pfive, helper.getRandomValue(1, 1000), [-0.3309378537204401, -1.2548385005425744]))
    stars.push(new Star(311.49023821300256, 622.1302707217374, pfive, helper.getRandomValue(1, 1000), [-0.13318287919546937, -1.2870887918545344]))
    stars.push(new Star(310.6008104220126, 583.4154288816434, pfive, helper.getRandomValue(1, 1000), [0.06726145325795338, -1.2887417144457145]))
    stars.push(new Star(315.70536081418635, 545.1243537727568, pfive, helper.getRandomValue(1, 1000), [0.2657100505249462, -1.2599333062764617]))
    stars.push(new Star(326.6729341307636, 508.1599351028833, pfive, helper.getRandomValue(1, 1000), [0.4576042076139521, -1.2014751991629347]))
    stars.push(new Star(343.23884675848416, 473.39083832675294, pfive, helper.getRandomValue(1, 1000), [0.6385928076092302, -1.1148086877390628]))
    stars.push(new Star(365.01199216418394, 441.6333472645818, pfive, helper.getRandomValue(1, 1000), [0.8046002007790399, -1.0019572069643337]))
    stars.push(new Star(391.4840856346143, 413.6346111801003, pfive, helper.getRandomValue(1, 1000), [0.9518885578589711, -0.8654808391882575]))
    stars.push(new Star(422.04060011587626, 390.0572805912583, pfive, helper.getRandomValue(1, 1000), [1.077107970226239, -0.7084288400570482]))
    stars.push(new Star(455.97322594369507, 371.46550414100693, pfive, helper.getRandomValue(1, 1000), [1.1773510373291833, -0.5342965462168783]))
    stars.push(new Star(492.494043649405, 358.3122559954411, pfive, helper.getRandomValue(1, 1000), [1.2502108902876687, -0.34697876411391027]))
    stars.push(new Star(530.751454682323, 350.92816862892556, pfive, helper.getRandomValue(1, 1000), [1.2938407581386877, -0.15071536320954554]))

}
