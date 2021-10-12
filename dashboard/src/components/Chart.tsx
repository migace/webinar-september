import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
      "country": "AD",
      "hot dog": 98,
      "hot dogColor": "hsl(84, 70%, 50%)",
      "burger": 110,
      "burgerColor": "hsl(76, 70%, 50%)",
      "sandwich": 156,
      "sandwichColor": "hsl(132, 70%, 50%)",
      "kebab": 44,
      "kebabColor": "hsl(2, 70%, 50%)",
      "fries": 161,
      "friesColor": "hsl(323, 70%, 50%)",
      "donut": 74,
      "donutColor": "hsl(269, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 4,
      "hot dogColor": "hsl(252, 70%, 50%)",
      "burger": 122,
      "burgerColor": "hsl(180, 70%, 50%)",
      "sandwich": 74,
      "sandwichColor": "hsl(54, 70%, 50%)",
      "kebab": 55,
      "kebabColor": "hsl(244, 70%, 50%)",
      "fries": 66,
      "friesColor": "hsl(176, 70%, 50%)",
      "donut": 145,
      "donutColor": "hsl(282, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 193,
      "hot dogColor": "hsl(206, 70%, 50%)",
      "burger": 46,
      "burgerColor": "hsl(258, 70%, 50%)",
      "sandwich": 22,
      "sandwichColor": "hsl(256, 70%, 50%)",
      "kebab": 53,
      "kebabColor": "hsl(233, 70%, 50%)",
      "fries": 179,
      "friesColor": "hsl(21, 70%, 50%)",
      "donut": 119,
      "donutColor": "hsl(203, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 123,
      "hot dogColor": "hsl(263, 70%, 50%)",
      "burger": 66,
      "burgerColor": "hsl(175, 70%, 50%)",
      "sandwich": 94,
      "sandwichColor": "hsl(152, 70%, 50%)",
      "kebab": 43,
      "kebabColor": "hsl(189, 70%, 50%)",
      "fries": 200,
      "friesColor": "hsl(342, 70%, 50%)",
      "donut": 9,
      "donutColor": "hsl(73, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 64,
      "hot dogColor": "hsl(148, 70%, 50%)",
      "burger": 27,
      "burgerColor": "hsl(254, 70%, 50%)",
      "sandwich": 138,
      "sandwichColor": "hsl(129, 70%, 50%)",
      "kebab": 140,
      "kebabColor": "hsl(342, 70%, 50%)",
      "fries": 25,
      "friesColor": "hsl(121, 70%, 50%)",
      "donut": 25,
      "donutColor": "hsl(20, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 82,
      "hot dogColor": "hsl(172, 70%, 50%)",
      "burger": 111,
      "burgerColor": "hsl(137, 70%, 50%)",
      "sandwich": 148,
      "sandwichColor": "hsl(118, 70%, 50%)",
      "kebab": 173,
      "kebabColor": "hsl(279, 70%, 50%)",
      "fries": 95,
      "friesColor": "hsl(280, 70%, 50%)",
      "donut": 17,
      "donutColor": "hsl(317, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 45,
      "hot dogColor": "hsl(112, 70%, 50%)",
      "burger": 159,
      "burgerColor": "hsl(142, 70%, 50%)",
      "sandwich": 183,
      "sandwichColor": "hsl(74, 70%, 50%)",
      "kebab": 197,
      "kebabColor": "hsl(134, 70%, 50%)",
      "fries": 15,
      "friesColor": "hsl(128, 70%, 50%)",
      "donut": 11,
      "donutColor": "hsl(330, 70%, 50%)"
    }
  ]

export const Chart = () => (
    <ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
