const profile = {
  m_name: 'ben',
  age: 20,
  location: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

const { m_name, age }: { m_name: string; age: number } = profile;
const {
  location: { lat, lng },
}: { location: { lat: number; lng: number } } = profile;
