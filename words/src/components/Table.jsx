/*function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>english</th>
          <th>transcription</th>
          <th>russian</th>
        </tr>
      </thead>
      <tbody>
        <tr key={props.id}>
          <td>{props.id}</td>
          <td>{props.english}</td>
          <td>{props.transcription}</td>
          <td>{props.russian}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table;*/
import Card from "./Card";
import TableRow from "./TableRow";
const words = [
  {
    id: "10847",
    english: "butterfly",
    transcription: "[ ˈbʌtəflaɪ ]",
    russian: "бабочка",
    tags: "животные334",
    tags_json: '["u0436u0438u0432u043eu0442u043du044bu0435334"]',
  },
  {
    id: "10848",
    english: "hedgehog",
    transcription: "[ˈhedʒhɔːɡ]",
    russian: "ёжик",
    tags: "животные334",
    tags_json: '["u043bu0434u043eu043bu0434u0434"]',
  },
  {
    id: "10853",
    english: "apple",
    transcription: "[ˈæpl]",
    russian: "яблоко",
    tags: "фрукты",
    tags_json: '["u0440u043bu043eu0440u043eu0440u043eu043b"]',
  },
  {
    id: "10854",
    english: "pear",
    transcription: "[peə]",
    russian: "груша",
    tags: "фрукты",
    tags_json: "null",
  },
  {
    id: "10862",
    english: "carrot",
    transcription: "[ˈkærət]",
    russian: "морковка",
    tags: "овощи",
    tags_json: '["u043eu0432u043eu0449u0438"]',
  },
  {
    id: "10867",
    english: "plum",
    transcription: "[plʌm]",
    russian: "слива",
    tags: "фрукты",
    tags_json: "null",
  },
  {
    id: "10872",
    english: "unicorn",
    transcription: "",
    russian: "единорог",
    tags: "животные",
    tags_json: "null",
  },
  {
    id: "10874",
    english: "cat",
    transcription: "[kæt]",
    russian: "кот",
    tags: "животные",
    tags_json: '["u0436u0438u0432u043eu0442u043du044bu0435"]',
  },
  {
    id: "10877",
    english: "dfhfdh",
    transcription: "fddf",
    russian: "выпыпы",
    tags: "ывпвыпы",
    tags_json: '["u044bu0432u043fu0432u044bu043fu044b"]',
  },
  {
    id: "10878",
    english: "sdgds",
    transcription: "sdgds",
    russian: "ывав",
    tags: "выпвып",
    tags_json: '["u0432u044bu043fu0432u044bu043f"]',
  },
  {
    id: "10879",
    english: "butterfly",
    transcription: "[ˈyo͞onəˌkôrn]",
    russian: "бабочка",
    tags: "сказка",
    tags_json: '["u0441u043au0430u0437u043au0430"]',
  },
];

const Table = () => {
  return (
    <>
      <table>
        <thead>
          <th>id</th>
          <th>english</th>
          <th>transcription</th>
          <th>russian</th>
        </thead>
        <tbody>
          {words.map((word: { ... }) => (
            <TableRow key={word.id} {...word} isEditable={word.id % 2 === 0} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
