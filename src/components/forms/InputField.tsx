const InputField = ({
  field,
  handleInputChange,
  value,
}: {
  field: any;
  handleInputChange: any;
  value: string;
}) => {
  return (
    <div>
      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {field.label}
      </label>
      {field.type === "select" ? (
        <select
          title="Select an option"
          name={field.name}
          value={value}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          {field.options.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea
          name={field.name}
          value={value}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder={field.placeholder}
        ></textarea>
      ) : (
        <input
          type={field.type}
          id={field.name}
          name={field.name}
          value={value}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder={field.placeholder}
        />
      )}
    </div>
  );
};

export default InputField;
