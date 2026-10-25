import PhoneBookSearchItem from "./PhoneBookSearchItem";

export default function PhoneBookSearchList({ filter }) {
  console.log("LIST SEARCH FILTER", filter);

  return (
    <>
      <h1>search</h1>
      <ul>
        {filter?.map((contact) => (
          <PhoneBookSearchItem contact={contact} />
        ))}
      </ul>
    </>
  );
}
