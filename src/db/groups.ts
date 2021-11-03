import { tool, toolEnum } from "mr-kernel/enums/tools";
import { roleEnum } from "mr-kernel/enums/roles";
import { typeEnum } from "mr-kernel/enums/types";
import { client, clientEnum } from "mr-kernel/enums/clients";
import { Group } from "mr-kernel/interfaces/project-firebase";
import { sortByDate } from "../modules/format-db";

import h from "mr-kernel/modules/helpers";

type GroupsType = Array<Group>;

const groups: GroupsType = [
  {
    date: "2004/01/01",
    disabled: false,
    clients: [
      clientEnum.itesa,
    ],
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    roles: [],
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.flash,
      toolEnum.fireworks,
      toolEnum.dreamweaver,
      toolEnum.pascal,
      toolEnum.c,
      toolEnum.vb,
      toolEnum.vfoxpro,
      toolEnum.bash,
      toolEnum.linux,
      toolEnum.excel,
      toolEnum.word,
      toolEnum.powerpoint,
    ],
    children: [
      h.getNewID(client.itesa, "2004/01/01"),
      h.getNewID(client.itesa, "2004/01/02"),
      h.getNewID(client.itesa, "2004/01/03"),
      h.getNewID(client.itesa, "2005/01/01"),
      h.getNewID(client.itesa, "2006/01/01"),
      h.getNewID(client.itesa, "2006/01/02"),
      h.getNewID(client.itesa, "2006/01/03"),
      h.getNewID(client.itesa, "2006/01/04"),
    ],
    description: "Computer Science, High School",
    list: [
      tool.html,
      tool.css,
      tool.javascript,
      tool.flash,
      tool.fireworks,
      tool.dreamweaver,
      tool.pascal,
      tool.c,
      tool.vb,
      tool.vfoxpro,
      tool.bash,
      tool.linux,
      tool.excel,
      tool.word,
      tool.powerpoint,
    ],
    position: {
      lat: 18.493212559615365,
      lng: -69.88831448456769,
    },
  },
  {
    date: "2015/05/13",
    types: [
      typeEnum.group,
    ],
    disabled: false,
    clients: [
      clientEnum.codepen,
    ],
    roles: [
      roleEnum.design,
    ],
    tools: [
      toolEnum.html,
      toolEnum.slim,
      toolEnum.haml,
      toolEnum.pug,
      toolEnum.css,
      toolEnum.scss,
      toolEnum.javascript,
      toolEnum.jQuery,
      toolEnum.vue,
      toolEnum.three,
      toolEnum.tweenMax,
    ],
    children: [
      h.getNewID(client.miguelRivas, "2015/05/14"),
      h.getNewID(client.miguelRivas, "2015/05/23"),
      h.getNewID(client.miguelRivas, "2015/05/25"),
      h.getNewID(client.miguelRivas, "2015/05/28"),
      h.getNewID(client.miguelRivas, "2017/02/20"),
      h.getNewID(client.miguelRivas, "2021/02/27"),
    ],
  },
  {
    date: "2009/09/01",
    disabled: false,
    description: "Associates of Arts, Multimedia",
    list: [
      `Digital Illustration`,
      `Visual Communication`,
      `Bitmap Graphics`,
      `Vector Graphics`,
      `Desktop Publishing`,
      `Digital Video`,
      `Website Creation`,
      `Flash Animation with Action Script`,
      `3D Graphics & Animation`,
      `Digital Audio`,
      `Branding`,
    ],
    position: {
      lat: 18.45316651707145,
      lng: -69.66131456337963,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    clients: [
      clientEnum.itla,
    ],
    roles: [
      roleEnum.design,
    ],
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.php,
      toolEnum.flash,
      toolEnum.premiere,
      toolEnum.afterEffects,
      toolEnum.maya,
      toolEnum.indesign,
      toolEnum.inkscape,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.fireworks,
      toolEnum.dreamweaver,
    ],
    children: [
      h.getNewID(client.itla, "2010/07/07"),
      h.getNewID(client.itla, "2011/06/22"),
      h.getNewID(client.itla, "2011/02/22"),
      h.getNewID(client.itla, "2011/04/24"),
      h.getNewID(client.itla, "2011/04/25"),
      h.getNewID(client.itla, "2011/07/06"),
      h.getNewID(client.itla, "2011/07/25"),
      h.getNewID(client.itla, "2011/07/31"),
      h.getNewID(client.itla, "2011/08/03"),
      h.getNewID(client.itla, "2011/11/15"),
      h.getNewID(client.itla, "2011/11/18"),
      h.getNewID(client.itla, "2011/12/05"),
      h.getNewID(client.itla, "2012/04/16"),
      h.getNewID(client.itla, "2012/06/25"),
      h.getNewID(client.itla, "2012/07/24"),
      h.getNewID(client.itla, "2012/09/13"),
      h.getNewID(client.itla, "2012/10/12"),
      h.getNewID(client.itla, "2012/11/26"),
      h.getNewID(client.itla, "2013/03/21"),
    ],
  },
  {
    date: "2013/01/01",
    disabled: true,
    description: "Graphic Designer",
    types: [
      typeEnum.location,
    ],
    tools: [
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.indesign,
    ],
    clients: [
      clientEnum.studioSeveral,
    ],
    list: [
      `Retouch pictures with ${tool.photoshop}`,
      `Design yearbooks with ${tool.indesign} and ${tool.photoshop}`,
    ],
    position: {
      lat: 18.4659438,
      lng: -69.915391,
    },
    zoom: 21,
  },
  {
    date: "2013/05/01",
    disabled: false,
    description: "Web Designer",
    list: [
      `Design applications UI using ${tool.illustrator}.`,
      `Design social media assets using ${tool.illustrator}, ${tool.photoshop} and ${tool.indesign}.`,
    ],
    position: {
      lat: 18.466018304331566,
      lng: -69.91533470462102,
    },
    zoom: 21,
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    clients: [
      clientEnum.socialNetwork,
    ],
    roles: [
      roleEnum.frontend,
    ],
    tools: [
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.indesign,
    ],
    children: [
      h.getNewID(client.socialNetwork, "2013/08/03"),
      h.getNewID(client.tiempoExtra, "2013/07/06"),
      h.getNewID(client.homeGallery, "2013/07/05"),
      h.getNewID(client.sdq, "2013/07/05"),
      h.getNewID(client.harinaBlanquita, "2013/06/27"),
      h.getNewID(client.highschool, "2013/06/18"),
    ],
  },
  {
    date: "2014/06/01",
    disabled: false,
    types: [
      typeEnum.group,
    ],
    clients: [
      clientEnum.presidente,
    ],
    roles: [
      roleEnum.frontend,
    ],
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.flash,
      toolEnum.grunt,
      toolEnum.php,
    ],
    children: [
      h.getNewID(client.presidente, "2014/06/02"),
      h.getNewID(client.presidente, "2014/06/16"),
      h.getNewID(client.presidente, "2014/10/18"),
      h.getNewID(client.presidente, "2014/11/05"),
      h.getNewID(client.presidente, "2015/03/30"),
      h.getNewID(client.presidente, "2015/04/18"),
      h.getNewID(client.presidente, "2015/10/23"),
      h.getNewID(client.presidente, "2015/12/16"),
    ],
  },
  {
    date: "2014/05/01",
    disabled: false,
    description: "Frontend Developer",
    list: [
      `Build applications using ${tool.jade}, ${tool.scss}, ${tool.jQuery} on a ${tool.php} environment with ${tool.grunt}.`,
      "Optimize applications for maximum speed.",
      `Create wireframes and users flow with ${tool.illustrator}.`,
      "Collaborate with Backend Developers, Designers and Project Managers to improve usability.",
      `Animate ad banners for websites using ${tool.flash}.`,
      `Create motion graphics for social media using ${tool.flash}.`,
    ],
    position: {
      lat: 18.4648539,
      lng: -69.9582155,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    clients: [
      clientEnum.capitalDBG,
    ],
    roles: [
      roleEnum.frontend,
    ],
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.grunt,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.flash,
    ],
    children: [
      h.getNewID(client.presidente, "2014/06/02"),
      h.getNewID(client.presidente, "2014/06/16"),
      h.getNewID(client.presidente, "2015/04/18"),
      h.getNewID(client.capitalDBG, "2014/08/06"),
      h.getNewID(client.presidente, "2014/10/18"),
      h.getNewID(client.presidente, "2014/11/05"),
      h.getNewID(client.pepsi, "2015/03/24"),
      h.getNewID(client.presidente, "2015/03/30"),
      h.getNewID(client.redRock, "2015/05/20"),
      h.getNewID(client.orange, "2015/05/27"),
      h.getNewID(client.capitalDBG, "2015/08/03"),
      h.getNewID(client.presidente, "2015/10/23"),
      h.getNewID(client.apap, "2015/11/12"),
      h.getNewID(client.presidente, "2015/12/16"),
    ],
  },
  {
    date: "2016/01/01",
    disabled: false,
    description: "Frontend Developer",
    list: [
      `Design and develop applications using ${tool.haml}, ${tool.scss}, ${tool.bootstrap}, ${tool.jQuery}/${tool.react} on a ${tool.rails} environment with ${tool.webpack}.`,
      "Maintain and optimize applications.",
      "Collaborate with Full Stack Developers and Project Managers to improve usability.",
      `Work with ${tool.git} for control version on projects.`,
      "Work with Agile.",
    ],
    position: {
      lat: 18.4460353,
      lng: -69.959968,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    clients: [
      clientEnum.pixelPerfectTree,
    ],
    roles: [
      roleEnum.frontend,
    ],
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.react,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.rails,
      toolEnum.bootstrap,
      toolEnum.git,
    ],
    children: [
      h.getNewID(client.pixelPerfectTree, "2015/10/28"),
      h.getNewID(client.pixelPerfectTree, "2016/01/29"),
      h.getNewID(client.bprBank, "2016/02/18"),
      h.getNewID(client.pixelPerfectTree, "2016/06/16"),
      h.getNewID(client.voxel, "2016/06/24"),
      h.getNewID(client.voxel, "2016/06/30"),
      h.getNewID(client.drLogic, "2016/02/22"),
    ],
  },
  {
    date: "2013/07/15",
    disabled: false,
    description: "Web Designer",
    list: [
      `Design and build applications using ${tool.html}, ${tool.css}, ${tool.jQuery} on a ${tool.php} environment.`,
      "Optimize applications for maximum speed.",
      `Design social media assets using ${tool.illustrator}, ${tool.photoshop} and ${tool.indesign}.`,
    ],
    position: {
      lat: 18.4703103,
      lng: -69.940124,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.avante,
    ],
    tools: [
      toolEnum.php,
      toolEnum.wordpress,
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    children: [
      h.getNewID(client.descubria, "2013/12/03"),
      h.getNewID(client.delJardin, "2013/12/06"),
      h.getNewID(client.descubria, "2014/01/14"),
    ],
  },
  {
    date: "2017/07/01",
    disabled: false,
    description: "Graphic Web Designer",
    list: [
      `Build prototypes and landing pages with ${tool.pug}, ${tool.scss}, ${tool.jQuery} and ${tool.miva}.`,
      "Maintain and optimize the website.",
      `Create wireframes and users flow with ${tool.illustrator}.`,
    ],
    position: {
      lat: 42.5395726,
      lng: -114.4798225,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.plantTherapy,
    ],
    tools: [
      toolEnum.php,
      toolEnum.miva,
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    children: [
      h.getNewID(client.plantTherapy, "2017/08/04"),
      h.getNewID(client.plantTherapy, "2017/09/20"),
      h.getNewID(client.plantTherapy, "2017/12/01"),

    ],
  },
  {
    date: "2021/03/29",
    disabled: false,
    description: "Frontend Developer",
    list: [
      `Build apps using ${tool.html}, ${tool.scss} and ${tool.jQuery} on a ${tool.php} environment with ${tool.grunt}.`,
      "Optimize applications for maximum speed.",
      `Work with ${tool.git} for control version on projects.`,
    ],
    position: {
      lat: 38.9550186,
      lng: -77.3670827,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.jellyfish,
    ],
    tools: [
      toolEnum.php,
      toolEnum.wordpress,
      toolEnum.html,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.grunt,
      toolEnum.javascript,
      toolEnum.jQuery,
    ],
    children: [
      h.getNewID(client.jellyfish, "2021/06/21"),
    ],
  },
  {
    date: "2018/04/01",
    disabled: false,
    description: "Frontend Developer",
    list: [
      `Build government apps using ${tool.html}/${tool.slim}, ${tool.scss}, ${tool.bootstrap}, ${tool.jQuery}/${tool.vue} on a ${tool.rails} environment with ${tool.webpack}.`,
      "Optimize applications for maximum speed compressing images and replacing repeated code with partials/headers/mixins/components.",
      "Make sure applications are following conventions and extending them according to the complexity of the project and frameworks being used.",
      "Collaborate with UI/UX Designers, Full Stack Developers, Project Managers, QA Testers and Business Analysts to improve usability.",
      `Work with ${tool.git} for control version on projects.`,
      "Work with Agile.",
    ],
    position: {
      lat: 38.902872,
      lng: -77.0299321,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.enovational,
    ],
    tools: [
      toolEnum.html,
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.vuex,
      toolEnum.scss,
      toolEnum.slim,
      toolEnum.git,
      toolEnum.rails,
      toolEnum.bootstrap,
      toolEnum.jQuery,
      toolEnum.three,
      toolEnum.svg,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.tweenMax,
    ],
    children: [
      h.getNewID(client.enovational, "2018/05/01"),
      h.getNewID(client.enovational, "2018/06/25"),
      h.getNewID(client.enovational, "2018/09/04"),
      h.getNewID(client.enovational, "2019/01/01"),
    ],
  },
].sort(sortByDate);

export { groups as groupsDB };