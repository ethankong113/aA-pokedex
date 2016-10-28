# json.set! @pokemon.id do
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :image_url, :items
# end
