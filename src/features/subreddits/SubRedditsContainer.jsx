import SubReddit from "../../components/SubReddit"

const SubRedditsContainer = () => {
  return (
    <div className="w-1/4 shadow-md min-w-[200px] max-w-[350px] p-5 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Subreddits</h2>
        <SubReddit/>
        <SubReddit/>
        <SubReddit/>
        <SubReddit/>
        <SubReddit/>
        <SubReddit/>
        <SubReddit/>
    </div>
  )
}

export default SubRedditsContainer