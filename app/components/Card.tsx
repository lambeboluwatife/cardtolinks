interface CardItem {
  icon: React.ReactNode;
  iconBackground: string;
  title: string;
  description: string;
  new?: boolean;
}

const Card = ({ item }: { item: CardItem }) => (
  <div className="flex flex-row items-center gap-2 hover:bg-gray-100 p-3 rounded-xl cursor-pointer transition">
    <div className={`mb-2 ${item.iconBackground} rounded-xl p-3`}>
      {item.icon}
    </div>
    <div className="flex flex-col items-start gap-0.5">
      <div className="flex items-center gap-2 flex-row">
        <h2 className="font-semibold text-sm">{item.title}</h2>
        {item.new && (
          <span className="text-[10px] text-blue-100 bg-blue-600 px-2 rounded-md">
            New
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 justify-between w-full">
        <p className="text-[10px] text-gray-600 leading-3">
          {item.description}
        </p>
        <span className="text-[10px] bg-gray-200 px-3 py-1 rounded-xl cursor-pointer hover:bg-gray-300">
          Open
        </span>
      </div>
    </div>
  </div>
);

export default Card;
