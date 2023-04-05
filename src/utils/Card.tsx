function Card(props: any) {
  return (
    <div
      className="product-card rounded-lg shadow-2xl overflow-hidden p-4 bg-white"
      {...props}
    >
      {props.children}
    </div>
  );
}

export default Card;
