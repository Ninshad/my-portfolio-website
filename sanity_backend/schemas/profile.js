export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [

    {
      name: 'name',
      title: 'Name',
      type: 'string'
    }, {
      name: 'profileImage',
      title: 'Prifile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'icon1',
      title: 'Icon1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'icon2',
      title: 'Icon2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'icon3',
      title: 'Icon3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

  ]
}