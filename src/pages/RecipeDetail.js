import { useParams } from "react-router-dom";

export default function RecipeDetail() {
    const params = useParams();
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Recipe Detail</h1>
            <p className="text-lg text-gray-600">ID: {params.recipeId}</p>
        </div>
    );
}
