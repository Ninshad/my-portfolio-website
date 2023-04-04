export default{
    name:'theme',
    title:'Theme',
    type: 'document',
    fields:[
        {
            title: "Theme",
            name: "theme",
            type: "string",
            options: {
              list: [
                { title: "Theme1", value: "1" },
                { title: "Theme2", value: "2" },
                { title: "Theme3", value: "3" }
              ],
              layout: "radio",
              direction: "horizontal"
            }
          }
        
    ]
}