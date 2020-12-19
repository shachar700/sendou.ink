import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { t, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import Breadcrumbs from "components/common/Breadcrumbs";
import MyContainer from "components/common/MyContainer";
import UserSelector from "components/common/UserSelector";
import RotationSelector from "components/sr/RotationSelector";
import { sendData } from "lib/postData";
import useUser from "lib/useUser";
import { salmonRunRecordSchema } from "lib/validators/salmonRunRecord";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const salmonRunCategoryToNatural = {
  TOTAL: t`All waves`,
  TOTAL_NO_NIGHT: t`All waves (no night)`,
  PRINCESS: t`Princess`,
  NT_NORMAL: t`Normal (normal tide)`,
  HT_NORMAL: t`Normal (high tide)`,
  LT_NORMAL: t`Normal (low tide)`,
  NT_RUSH: t`Rush (normal tide)`,
  HT_RUSH: t`Rush (high tide)`,
  NT_FOG: t`Fog (normal tide)`,
  HT_FOG: t`Fog (high tide)`,
  LT_FOG: t`Fog (low tide)`,
  NT_GOLDIE: t`Goldie Seeking (normal tide)`,
  HT_GOLDIE: t`Goldie Seeking (high tide)`,
  NT_GRILLERS: t`Grillers (normal tide)`,
  HT_GRILLERS: t`Grillers (high tide)`,
  NT_MOTHERSHIP: t`Mothership (normal tide)`,
  HT_MOTHERSHIP: t`Mothership (high tide)`,
  LT_MOTHERSHIP: t`Mothership (low tide)`,
  LT_COHOCK: t`Cohock Charge`,
} as const;

type FormData = z.infer<typeof salmonRunRecordSchema>;

const AddRecordModal = () => {
  const { i18n } = useLingui();
  const [sending, setSending] = useState(false);
  const [loggedInUser] = useUser();
  const { handleSubmit, errors, register, control, watch } = useForm<FormData>({
    resolver: zodResolver(salmonRunRecordSchema),
  });

  const watchRotationId = watch("rotationId", undefined);

  const onSubmit = async (formData: FormData) => {
    if (!loggedInUser) {
      console.error("Unexpected no logged in user");
      return;
    }
    setSending(true);
    const mutationData = { ...formData };

    const success = await sendData("POST", "/api/sr/records", mutationData);
    setSending(false);
    if (!success) return;

    //mutate(`/api/users/${loggedInUser.id}/builds`);

    //redirect()
  };

  return (
    <MyContainer>
      <Breadcrumbs
        pages={[
          { name: t`Salmon Run` },
          { name: t`Leaderboards`, link: "/sr/leaderboards" },
          { name: t`New record` },
        ]}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="rotationId"
          control={control}
          defaultValue={null}
          render={({ value, onChange }) => (
            <RotationSelector rotationId={value} setRotationId={onChange} />
          )}
        />

        {watchRotationId && (
          <>
            <FormLabel htmlFor="category" mt={4}>
              <Trans>Category</Trans>
            </FormLabel>
            <Select name="category" ref={register}>
              {Object.entries(salmonRunCategoryToNatural).map(
                ([key, value]) => (
                  <option key={key} value={key}>
                    {i18n._(value)}
                  </option>
                )
              )}
            </Select>

            <FormControl isInvalid={!!errors.goldenEggCount}>
              <FormLabel htmlFor="goldenEggCount" mt={4}>
                <Flex alignItems="center">
                  <Flex align="center" mr={1}>
                    <Image
                      src="/images/salmonRunIcons/Golden%20Egg.png"
                      width={32}
                      height={32}
                    />
                  </Flex>
                  <Trans>Golden Egg Count</Trans>
                </Flex>
              </FormLabel>
              <Controller
                name="goldenEggCount"
                control={control}
                defaultValue={0}
                render={({ value, onChange }) => (
                  <NumberInput
                    name="goldenEggCount"
                    maxW={48}
                    value={value}
                    onChange={(_, value) => onChange(value)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                )}
              />
              <FormErrorMessage>
                {errors.goldenEggCount?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel mt={4}>
                <Trans>Players</Trans>
              </FormLabel>
              <Controller
                name="userIds"
                control={control}
                defaultValue={[]}
                render={({ value, onChange }) => (
                  <UserSelector
                    value={value}
                    setValue={onChange}
                    isMulti={true}
                    maxMultiCount={3}
                  />
                )}
              />
              <FormHelperText>
                Add up to three people you played with when you got the result.
              </FormHelperText>
            </FormControl>

            <FormControl isInvalid={!!errors.links}>
              <FormLabel mt={4}>
                <Trans>Links</Trans>
              </FormLabel>
              <FormHelperText mb={3} mt="-7px">
                <Trans>
                  Add one to four links to provide context behind the record
                  (e.g. VoDs on YouTube, screenshots on Twitter). One link per
                  line.
                </Trans>
              </FormHelperText>
              <Textarea
                name="links"
                ref={register}
                rows={4}
                resize="none"
                placeholder={
                  "https://twitter.com/BrianTheDrumer/status/1338469066797953024\nhttps://www.youtube.com/watch?v=6evFXzxrTfU"
                }
              />
              <FormErrorMessage mt="-1px">
                {errors.links?.message}
              </FormErrorMessage>
            </FormControl>

            <Button mt={6} type="submit" isLoading={sending}>
              <Trans>Submit</Trans>
            </Button>
          </>
        )}
      </form>
    </MyContainer>
  );
};

export default AddRecordModal;
