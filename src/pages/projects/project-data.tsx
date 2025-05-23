
export type ProjectSchema = {
    title: string
    description: string
    thumbnailPath: string
    url: string
}

export const projects: ProjectSchema[] = [
    {
      title: "AI Learns to Drive",
      description: 'A visual demonstration of how a neural network makes it\'s decisions. Watch it learn in real time how to navigate dynamic roads.',
      thumbnailPath: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGtndHFvamd5cG5pdXhkNDkxa2I3N2FiZ2dwb2JneW15bmtyY2kxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rSTZI4659jiC2Cr6FH/giphy.gif",
      url: "/projects/ai-learns-to-drive",
    },
    {
      title: "Interactive 3D Engine",
      description: 'An interactive 3D engine that allows you to move and interact with a virtual world. Written in Java using the OpenGL & LWJGL libraries.',
      thumbnailPath: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnpwcG13MnY1emprMTFiZ2hyM3MxYW1lc3Awc3VkNDQ2dWFjbjdoMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LeGnsKiiTcYMl05PCU/giphy.gif",
      url: "/projects/interactive-3d-engine",
    },
    {
      title: "Optical Character Recognition",
      description: 'An interactive OCR web app that uses a neural network to predict user-drawn characters.',
      thumbnailPath: "https://media.giphy.com/media/zJ3v3ysX6bfUMJecQM/giphy.gif?cid=ecf05e478firwyjkakcstwbommk50dggpu2apuz4b1cbkwqv&ep=v1_gifs_related&rid=giphy.gif&ct=g",
      url: "/projects/optical-character-recognition",
    },
    {
      title: "Chess Engine",
      description: 'Chess.',
      thumbnailPath: "",
      url: "/projects/chess-engine",
    },
    {
      title: "Spotify Tracker",
      description: 'See your spotify listening habits, most listened to songs, and top artists.',
      thumbnailPath: "",
      url: "/projects/spotify-tracker",
    },
  ]
  