import { useContext } from "react";
import styles from "../styles/Demos.module.scss";
import { AiTwotoneHome } from "react-icons/ai";
import { useRouter } from "next/router";
import Projects from "@/components/Projects";
import InfoModal from "@/components/InfoModal";
import { InfoModalContext } from "@/context/infoModal";

const projects = [
  {
    id: "1",
    name: "project one",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum, mauris ut sodales fringilla, elit nibh pharetra lectus, eu rhoncus nisi justo euismod sem. Ut maximus mi ac hendrerit semper. Quisque quis laoreet diam. Quisque ac faucibus libero. Ut eu accumsan purus. Etiam posuere quam purus, eget convallis orci pulvinar at. Nunc varius dolor turpis, dapibus ullamcorper sem dignissim ut. Cras fringilla elit et mi imperdiet egestas. Donec eget vestibulum metus, et pharetra ipsum. In elementum dolor id neque dictum hendrerit et sit amet orci. Integer eu mi luctus, tincidunt nisl in, semper sapien. Sed congue sem rutrum, laoreet tellus ac, condimentum nisl. Cras aliquam, erat et tincidunt faucibus, lectus purus faucibus velit, ut commodo elit urna sit amet justo. Proin malesuada aliquam mi, a cursus dui dictum ut.",
    displayImage:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/04/Image_-_Website_types_.jpeg.jpg",
    screenshots: [
      {
        id: "sd78fh",
        description:
          "Phasellus vitae mattis sapien, quis bibendum quam. Maecenas quis tincidunt ligula, et eleifend diam. Vestibulum ipsum mauris, volutpat vitae libero quis, lacinia facilisis leo. Ut sagittis ante ligula, vitae elementum erat semper at. Aliquam tristique tempus dolor, in consequat mauris elementum vitae. Ut egestas erat sit amet odio tempus sagittis. Sed vitae nunc diam.",
        screenshot:
          "https://www.psncodesfree.org/png/small-business-website.png",
      },
      {
        id: "fl04js",
        description:
          "Aliquam placerat sit amet tellus in commodo. Vivamus nisi ipsum, lobortis at massa at, mollis bibendum nibh. Pellentesque ante velit, hendrerit eu sem sit amet, congue sagittis purus. Etiam rutrum, mi ut blandit ullamcorper, diam orci interdum est, venenatis vestibulum ex dolor in risus.",
        screenshot:
          "https://robcubbon.com/wp-content/uploads/2017/05/guy-working-from-home-running-a-web-design-business.jpg",
      },
      {
        id: "cvk34j",
        description:
          "Pellentesque justo magna, lobortis eu cursus a, posuere vitae eros. Ut mauris nisl, volutpat et efficitur sed, sodales et neque. Proin nunc erat, molestie et nibh at, maximus lobortis odio. In accumsan orci vel cursus tincidunt. Quisque rutrum enim eu nisi rhoncus sollicitudin. Etiam vel sollicitudin tellus. Mauris vulputate scelerisque laoreet. Cras rutrum varius mauris, sit amet aliquam lorem congue pharetra. Fusce eget risus magna.",
        screenshot:
          "https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg",
      },
      {
        id: "os93hn",
        description:
          "In vulputate, justo quis suscipit pulvinar, eros turpis accumsan sapien, mattis viverra leo turpis eget tortor. Praesent convallis magna eros, sodales efficitur ligula ultricies non. Sed congue tristique faucibus. Phasellus nec lectus eros. Donec eget felis tincidunt, commodo diam sit amet, euismod tortor. Aliquam lacinia accumsan mattis. Nunc tincidunt arcu eu justo malesuada, a facilisis ante vestibulum.",
        screenshot:
          "https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/5-ways-seo-web-design-go-together-5e2945dd5df37.png",
      },
    ],
  },
  {
    id: "2",
    name: "project two",
    description:
      "Donec placerat lorem ligula, eu iaculis orci congue eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eu dapibus nibh, in dignissim lorem. Aliquam vitae placerat lectus. Maecenas egestas scelerisque velit. Cras elit turpis, sagittis eget mi nec, pharetra consequat massa. Fusce egestas pretium pharetra. Sed finibus, metus non convallis accumsan, ex leo feugiat ipsum, et finibus metus lacus id lacus. Praesent lacinia eleifend massa, nec scelerisque orci vestibulum ac. Duis sem quam, placerat ut vulputate eu, consequat vitae tortor. Fusce sed sem at mauris iaculis suscipit. In ultricies laoreet turpis et gravida. Morbi lobortis lacus quis ornare ultrices. Proin aliquam tortor ac tellus posuere, eu sagittis eros fringilla.",
    displayImage:
      "https://www.cookiepro.com/wp-content/uploads/2019/10/iStock-517901788.jpg",
    screenshots: [
      {
        id: "sd78fh",
        description:
          "Sed eleifend, massa non hendrerit gravida, tortor tortor faucibus orci, eget convallis justo sem ac turpis. Curabitur est erat, lobortis ut magna ac, luctus eleifend orci. Morbi eget lectus non tortor suscipit fringilla. Sed sit amet quam nec libero luctus molestie. Nunc feugiat eros et tellus bibendum, et imperdiet nibh commodo.",
        screenshot:
          "https://www.psncodesfree.org/png/small-business-website.png",
      },
      {
        id: "fl04js",
        description:
          "Fusce ultrices, erat ut sollicitudin feugiat, elit nisi ullamcorper lectus, sit amet tincidunt quam ante vitae ex. Quisque rutrum ex vitae mauris convallis, vel malesuada urna luctus. Proin sit amet est a enim rhoncus sollicitudin sit amet hendrerit lacus. In sed dolor rutrum, consequat massa at, semper mauris. Morbi interdum sapien at nunc sodales, at pharetra nulla varius.",
        screenshot:
          "https://robcubbon.com/wp-content/uploads/2017/05/guy-working-from-home-running-a-web-design-business.jpg",
      },
      {
        id: "cvk34j",
        description:
          "Morbi sollicitudin justo mauris, vitae luctus purus varius vitae. Ut blandit justo id lorem commodo sodales. Curabitur malesuada nisi a enim lacinia, viverra tempus velit gravida. Suspendisse ut elit nec lacus commodo mattis. Phasellus non dictum neque. Proin accumsan nunc id sem commodo, a blandit odio volutpat.",
        screenshot:
          "https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg",
      },
      {
        id: "os93hn",
        description:
          "Mauris nec efficitur metus, sed consequat arcu. Aenean a orci sollicitudin, volutpat leo vitae, placerat ligula. Curabitur nec accumsan metus. Vivamus nec urna nec quam ultricies vulputate at id purus. Donec vel justo dolor. Vivamus sit amet turpis in arcu vehicula venenatis. In at lectus elit.",
        screenshot:
          "https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/5-ways-seo-web-design-go-together-5e2945dd5df37.png",
      },
    ],
  },
  {
    id: "3",
    name: "project three",
    description:
      "Morbi convallis maximus tincidunt. Praesent non metus ut sem fringilla accumsan. Nulla ut consequat lorem. Ut dolor augue, malesuada nec euismod iaculis, faucibus non lacus. Mauris condimentum egestas eros, in ultrices dui pellentesque sit amet. Maecenas bibendum lectus eget sodales elementum. Ut viverra lacinia metus, vitae accumsan ligula semper et. Nam eu placerat mauris. Vivamus ut rutrum massa. Maecenas consectetur lobortis elit ac malesuada. Pellentesque vulputate, elit in pretium auctor, lorem est porttitor lorem, non suscipit felis lectus placerat ipsum. Nulla imperdiet elit a eros aliquet, nec volutpat ante molestie.",
    displayImage: "https://miro.medium.com/max/1400/0*-vnjZBDGQl1R0fbO.png",
    screenshots: [
      {
        id: "sd78fh",
        description:
          "Nunc finibus sed neque vitae tristique. Fusce euismod viverra ornare. Ut iaculis nulla id dui aliquet cursus. Curabitur tristique augue tellus, id lobortis libero feugiat a. Aliquam imperdiet elit non ornare ullamcorper. Etiam lectus nunc, tristique sed lorem sit amet, euismod posuere ipsum.",
        screenshot:
          "https://www.psncodesfree.org/png/small-business-website.png",
      },
      {
        id: "fl04js",
        description:
          "Ut viverra lacinia metus, vitae accumsan ligula semper et. Nam eu placerat mauris. Vivamus ut rutrum massa. Maecenas consectetur lobortis elit ac malesuada. Pellentesque vulputate, elit in pretium auctor, lorem est porttitor lorem, non suscipit felis lectus placerat ipsum. Nulla imperdiet elit a eros aliquet, nec volutpat ante molestie.",
        screenshot:
          "https://robcubbon.com/wp-content/uploads/2017/05/guy-working-from-home-running-a-web-design-business.jpg",
      },
      {
        id: "cvk34j",
        description:
          "Morbi convallis maximus tincidunt. Praesent non metus ut sem fringilla accumsan. Nulla ut consequat lorem. Ut dolor augue, malesuada nec euismod iaculis, faucibus non lacus. Mauris condimentum egestas eros, in ultrices dui pellentesque sit amet. Maecenas bibendum lectus eget sodales elementum.",
        screenshot:
          "https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg",
      },
      {
        id: "os93hn",
        description:
          "Mauris non massa nibh. Sed a arcu eros. Ut sodales sed est vitae tristique. Nam pharetra consequat quam. Vestibulum ac felis sem. Pellentesque hendrerit ultricies aliquet. Donec iaculis sollicitudin tellus, vel efficitur erat fringilla quis. Aliquam odio nunc, dapibus sed vestibulum varius, porta in lectus.",
        screenshot:
          "https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/5-ways-seo-web-design-go-together-5e2945dd5df37.png",
      },
    ],
  },
  {
    id: "4",
    name: "project four",
    description:
      "Aliquam aliquet malesuada lacus, accumsan accumsan nunc efficitur ac. Aliquam sed nisl vitae erat convallis cursus. Duis sodales sit amet lorem et semper. Pellentesque nec lobortis leo. Aenean sed metus at lorem tempor egestas. Aliquam sagittis, enim et tempor efficitur, libero enim interdum enim, ac viverra nisi mauris vel dolor. Etiam eget erat et nibh volutpat laoreet id id diam. Etiam et felis tempus, bibendum erat eget, facilisis mauris. Donec sit amet arcu eget quam venenatis sagittis. Quisque vel ligula augue. Nulla tempus lectus vitae neque vestibulum, eu accumsan orci tempus. Pellentesque vitae feugiat arcu. Quisque ornare ut nunc quis varius. Mauris fermentum elit lorem, eget eleifend dolor ultricies at. Morbi congue felis convallis enim tincidunt, at rutrum quam auctor.",
    displayImage:
      "https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png",
    screenshots: [
      {
        id: "sd78fh",
        description:
          "Sed vel pretium elit. Vestibulum tempor neque et justo egestas consectetur. Pellentesque auctor elit sed arcu blandit, ut fringilla ante eleifend. Donec at nunc magna. Nam fringilla accumsan neque sed viverra. Integer tempus nunc volutpat libero consectetur, vel fermentum dui fermentum. Vestibulum rhoncus neque sed nisi euismod tincidunt.",
        screenshot:
          "https://www.psncodesfree.org/png/small-business-website.png",
      },
      {
        id: "fl04js",
        description:
          "Donec sit amet arcu eget quam venenatis sagittis. Quisque vel ligula augue. Nulla tempus lectus vitae neque vestibulum, eu accumsan orci tempus. Pellentesque vitae feugiat arcu. Quisque ornare ut nunc quis varius. Mauris fermentum elit lorem, eget eleifend dolor ultricies at. Morbi congue felis convallis enim tincidunt, at rutrum quam auctor.",
        screenshot:
          "https://robcubbon.com/wp-content/uploads/2017/05/guy-working-from-home-running-a-web-design-business.jpg",
      },
      {
        id: "cvk34j",
        description:
          "Aliquam aliquet malesuada lacus, accumsan accumsan nunc efficitur ac. Aliquam sed nisl vitae erat convallis cursus. Duis sodales sit amet lorem et semper. Pellentesque nec lobortis leo. Aenean sed metus at lorem tempor egestas. Aliquam sagittis, enim et tempor efficitur, libero enim interdum enim, ac viverra nisi mauris vel dolor. Etiam eget erat et nibh volutpat laoreet id id diam. Etiam et felis tempus, bibendum erat eget, facilisis mauris.",
        screenshot:
          "https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg",
      },
      {
        id: "os93hn",
        description:
          "Nunc a felis tempus, volutpat felis a, consequat dui. Fusce quis arcu augue. Donec ac viverra nibh. Proin in mattis dui. Nam augue tellus, ornare non dictum id, pretium non magna. Donec ut pretium mauris, a pellentesque mauris. Aliquam condimentum tellus quis nibh molestie, ut mollis enim dignissim. Nunc interdum justo ex, ac auctor nibh pretium quis.",
        screenshot:
          "https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/5-ways-seo-web-design-go-together-5e2945dd5df37.png",
      },
    ],
  },
  {
    id: "5",
    name: "project five",
    description:
      "Maecenas egestas dolor in mauris lacinia dapibus. Praesent pharetra maximus nisi, in viverra velit. Pellentesque auctor arcu sed est ullamcorper rutrum. Nunc vulputate augue in ligula semper, nec commodo odio pharetra. Duis iaculis mauris nec ligula dictum, ac mattis nisl rutrum. Nulla tempor purus eu ornare feugiat. Praesent faucibus lacus at magna aliquam faucibus. Vestibulum vitae pulvinar velit. Phasellus scelerisque lacus orci, sed interdum magna rutrum a. Ut euismod lacus in dapibus cursus. Donec a dolor sollicitudin, feugiat nisi at, dapibus ipsum. Sed lacus mi, commodo nec dolor eget, aliquam finibus quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas cursus nibh a nisl viverra, vitae placerat libero semper. Proin congue, justo ac congue lobortis, nisi quam pulvinar dui, a vulputate est eros vitae ipsum. In eget ornare sapien, suscipit iaculis felis.",
    displayImage:
      "https://technerve.my/wp-content/uploads/2020/07/istock-827896866.jpg",
    screenshots: [
      {
        id: "sd78fh",
        description:
          "Praesent rhoncus, ipsum bibendum ornare finibus, dui orci ullamcorper ex, ultrices pretium ligula tortor pulvinar magna. Integer vitae venenatis ex, nec malesuada velit. Ut varius, est ut egestas venenatis, risus velit pellentesque diam, eget varius nunc libero sed eros. Vivamus molestie non elit ut gravida. Fusce congue velit lectus, sit amet rhoncus leo eleifend id.",
        screenshot:
          "https://www.psncodesfree.org/png/small-business-website.png",
      },
      {
        id: "fl04js",
        description:
          "Phasellus placerat nisi tincidunt sapien gravida, nec porttitor lorem fermentum. Mauris eu commodo sapien. Sed ultrices rutrum nunc, vitae placerat sapien. Aenean vel tincidunt augue, id condimentum lectus. Aenean at ante ac justo ullamcorper placerat. Morbi eros lacus, rutrum cursus mauris eu, laoreet aliquet nulla. Vivamus ac purus in leo vestibulum feugiat ut nec lacus. Proin consequat imperdiet libero sed egestas.",
        screenshot:
          "https://robcubbon.com/wp-content/uploads/2017/05/guy-working-from-home-running-a-web-design-business.jpg",
      },
      {
        id: "cvk34j",
        description:
          "Ut fermentum magna eu lacus lacinia, ac placerat turpis pulvinar. Morbi vestibulum est ex, eu cursus leo maximus quis. Vivamus varius tempor odio sed feugiat. Donec nec lorem turpis. Nullam mollis sed risus ac lacinia. Ut pharetra ut nulla eget dignissim. Donec vitae quam ullamcorper, fermentum enim vel, egestas lorem. Morbi maximus, purus eu euismod volutpat, est augue pellentesque nisl, id maximus leo leo pulvinar odio.",
        screenshot:
          "https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg",
      },
      {
        id: "os93hn",
        description:
          "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut id tellus pellentesque, fermentum nisl in, rhoncus nulla. Vivamus mollis et justo ut suscipit. Suspendisse rutrum malesuada euismod. Vestibulum suscipit et leo vulputate condimentum. Maecenas finibus, magna at iaculis sagittis, lorem sem scelerisque odio, sed porttitor ex lectus eget nisl. Vivamus scelerisque vitae massa in porta.",
        screenshot:
          "https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/5-ways-seo-web-design-go-together-5e2945dd5df37.png",
      },
    ],
  },
];

const demos = () => {
  const router = useRouter();

  const { isinfoModalOpen } = useContext(InfoModalContext);

  return (
    <div
      className={
        isinfoModalOpen ? styles.container : styles.containerWithScroll
      }
    >
      <AiTwotoneHome
        className="homeIcon"
        title="Home Page"
        onClick={() => router.push("/")}
      />
      <div className={styles.projects}>
        {projects.map((project) => (
          <Projects key={project.id} project={project} />
        ))}
      </div>

      {isinfoModalOpen && <InfoModal />}
    </div>
  );
};

export default demos;
