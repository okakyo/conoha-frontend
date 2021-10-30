import { Box } from "@chakra-ui/react";
import { BaseLayout, ArticleWindow, MemberCard } from "@/components";
import { SimpleGrid } from "@chakra-ui/layout";
import {
  Legend,
  Line,
  LineChart,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Home = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <BaseLayout>
        <Box mb={4} p={2} color="gray.600">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart />
          </ResponsiveContainer>
          <ArticleWindow />
          <SimpleGrid py={6} columns={{ base: 2, lg: 3, xl: 4 }}>
            {[2, 3, 3, 4, 5, 6, 1, 4].map((item, i) => (
              <MemberCard key={i} />
            ))}
          </SimpleGrid>
        </Box>
      </BaseLayout>
    </>
  );
};

export default Home;
