import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = (itemData) => {
  // console.log(itemData);
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

const CatagoriesScreen = () => {
  // console.log(CATEGORIES)
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      // numColumns's use?
      numColumns={2}
    />
  );
};

export default CatagoriesScreen;
