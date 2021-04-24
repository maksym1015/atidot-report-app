const title = {
  application: "Application Submissions Projection",
  premium: "Submitted Premium Projections",
  paid: "Projected Paid Premium"
}
const subTitle = {
  application: "Application Gap",
  premium: "Target Pre. Gap ",
  paid: "Paid Potential Gap"
}
const value = {
  application: [1211, 1425, 214],
  premium: ['$14.8M', '$20M', '-$5M'],
  paid: ['$8.3M', '$9.2M', '-$0.9M'],
}
const percent = {
  application: ['2.7%', '0.1%'],
  premium: ['25.9%', '2.3%'],
  paid: ['19%', '4.1%']
}
const keys = {
  application: ['Growth in Distributor A', 'Negative growth Distributor B', 'Negative growth IUL submissions', '35-50 years old Term growth'],
  premium: ['Negative growth IUL submitted premium', 'Growth VUL submitted premium', 'Negative Growth in Distributor C', 'Negative growth IUL submissions ']
}

const gaps = {
  application: ['16% (35 apps)', '5% (12 apps)', '4% (11 apps)', '7% (24 apps)'],
  premium: ['36% ($1.63M)', '34% ($1.52M)', '24% ($1.3M)', '16% ($762k)']
}

const measurings = [{
    title: "Term",
    category: [{
        subTile: "Submissions",
        me: ['~174', 'up', '4.8%'],
        benchmark: ['~279', 'up', '4.9%']
      },
      {
        subTile: "Submitted Premium",
        me: ['~$7.7M', 'down', '-28%'],
        benchmark: ['~$5M', 'up', '2.9%']
      },
      {
        subTile: "Paid Potential",
        me: ['~$4.8M', 'down', '-18%'],
        benchmark: ['~$2.8M', 'up', '5%']
      },
      {
        subTile: "Premium Loss/Gain",
        value: '+$1.9M',
        comment: 'Negative growth predicted at ',
        distributor: 'Distributor A'
      }
    ]
  },
  {
    title: "Whole Life",
    category: [{
        subTile: "Submissions",
        me: ['~17', 'down', '2.8%'],
        benchmark: ['~229', 'up', '3.9%']
      },
      {
        subTile: "Submitted Premium",
        me: ['~$7.3M', 'down', '-58%'],
        benchmark: ['~$2M', 'up', '6.9%']
      },
      {
        subTile: "Paid Potential",
        me: ['~$4.8M', 'up', '-18%'],
        benchmark: ['~$3.8M', 'up', '5%']
      },
      {
        subTile: "Premium Loss/Gain",
        value: '+$1.9M',
        comment: 'Positive growth predicted at ',
        distributor: 'Distributor B'
      }
    ]
  },
  {
    title: "VUL",
    category: [{
        subTile: "Submissions",
        me: ['~334', 'up', '14.8%'],
        benchmark: ['~229', 'up', '4.9%']
      },
      {
        subTile: "Submitted Premium",
        me: ['~$7.7M', 'down', '-28%'],
        benchmark: ['~$15M', 'down', '2.9%']
      },
      {
        subTile: "Paid Potential",
        me: ['~$4.8M', 'down', '-18%'],
        benchmark: ['~$3.8M', 'up', '15%']
      },
      {
        subTile: "Premium Loss/Gain",
        value: '+$1.3M',
        comment: 'Negative growth predicted at ',
        distributor: 'Distributor C'
      }
    ]
  },
  {
    title: "Universal Life",
    category: [{
        subTile: "Submissions",
        me: ['~123', 'up', '42%'],
        benchmark: ['~234', 'up', '49%']
      },
      {
        subTile: "Submitted Premium",
        me: ['~$9.7M', 'up', '28%'],
        benchmark: ['~$15M', 'up', '29%']
      },
      {
        subTile: "Paid Potential",
        me: ['~$7.8M', 'down', '18%'],
        benchmark: ['~$2.8M', 'down', '5%']
      },
      {
        subTile: "Premium Loss/Gain",
        value: '+$3.9M',
        comment: 'Negative growth predicted at ',
        distributor: 'Distributor D'
      }
    ]
  }
]

export { title, subTitle, value, percent, keys, gaps, measurings }