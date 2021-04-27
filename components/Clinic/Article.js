export default function Article() {
  return (
    <div class="row">
      <div class="col-3">
        <img class="article-image" src={`${article}.jpg`} />
      <div>
      <div class="col-9">
        <h3> {article.title} </h3>
        <p> {article.body.substring(0, 100) + " ..."}
      </div>
    <div>
  )
}
