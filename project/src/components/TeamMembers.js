import { List, Typography, Divider, Avatar } from "antd";
import team from "../data/teamMembers";

const { Title } = Typography;

const TeamMembers = () => (
  <>
    <Title>Team members</Title>
    <Divider />
    <List
      size="large"
      bordered
      dataSource={team}
      renderItem={({ name, image, description }) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar size={45} src={image} />}
            title={name}
            description={description}
          />
        </List.Item>
      )}
    />
  </>
);

export default TeamMembers;
